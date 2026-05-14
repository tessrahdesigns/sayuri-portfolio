/**
 * Captures Yuniter homepage while scrolling viewport, then stitches frames into an animated GIF
 * via ffmpeg-static. Run: npm run capture:yuniter-gif (after Playwright chromium install).
 */

import { mkdirSync, rmSync, readdirSync, existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { spawnSync } from 'node:child_process'
import ffmpegStatic from 'ffmpeg-static'
import { chromium } from 'playwright'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const CACHE = join(__dirname, '.yuniter-scroll-cache')
const OUT = join(ROOT, 'public', 'images', 'yuniter-homepage-scroll.gif')

const URL = 'https://yuniter.com/'
const VIEWPORT = { width: 1024, height: 600 }
const MAX_FRAMES = 48
/** Scroll overlap as fraction of viewport height (smooth motion, fewer redundant frames). */
const SCROLL_RATIO = 0.52

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

function clearCache() {
  if (existsSync(CACHE)) {
    rmSync(CACHE, { recursive: true, force: true })
  }
  mkdirSync(CACHE, { recursive: true })
}

async function captureFrames(page) {
  await page.goto(URL, {
    waitUntil: 'networkidle',
    timeout: 90_000,
  })
  await sleep(2500)

  // Best-effort: dismiss common cookie overlays
  await page.getByRole('button', { name: /accept|agree/i }).first().click({ timeout: 2000 }).catch(() => {})
  await page.locator('.cky-btn-accept').first().click({ timeout: 1500 }).catch(() => {})

  await sleep(800)

  const step = Math.max(120, Math.floor(VIEWPORT.height * SCROLL_RATIO))
  let scrollY = 0
  let index = 0

  while (index < MAX_FRAMES) {
    await page.evaluate((y) => window.scrollTo(0, y), scrollY)
    await sleep(350)

    const path = join(CACHE, `frame${String(index).padStart(4, '0')}.png`)
    await page.screenshot({
      path,
      type: 'png',
      fullPage: false,
    })

    const { scrollHeight, clientHeight } = await page.evaluate(() => ({
      scrollHeight: document.documentElement.scrollHeight,
      clientHeight: document.documentElement.clientHeight,
    }))

    const maxScroll = Math.max(0, scrollHeight - clientHeight)
    index += 1

    if (scrollY >= maxScroll - 4) break
    scrollY += step
    if (scrollY > maxScroll) scrollY = maxScroll
  }

  const total = await page.evaluate(
    () => document.documentElement.scrollHeight,
  )
  console.log(`Captured ${index} viewport frames (scrollHeight ${total}px).`)
  return index
}

function ffmpegToGif() {
  const bin = ffmpegStatic
  if (!bin) {
    console.error('ffmpeg-static binary missing.')
    process.exitCode = 1
    return
  }

  const files = readdirSync(CACHE)
    .filter((f) => /^frame\d{4}\.png$/.test(f))
    .sort()

  if (files.length === 0) {
    console.error('No PNG frames captured.')
    process.exitCode = 1
    return
  }

  console.log(`Encoding GIF with ffmpeg (${files.length} frames)…`)

  const inputPattern = join(CACHE, 'frame%04d.png')

  /** palette pass for smoother colors + reasonable file size */
  const filter =
    'fps=7,scale=860:-2:flags=lanczos,split[a][b];[a]palettegen=reserve_transparent=0:stats_mode=full[p];[b][p]paletteuse=new=1:dither=bayer:bayer_scale=3'

  const r = spawnSync(
    bin,
    [
      '-y',
      '-hide_banner',
      '-loglevel',
      'warning',
      '-framerate',
      '7',
      '-i',
      inputPattern,
      '-vf',
      filter,
      OUT,
    ],
    { cwd: ROOT, encoding: 'utf8' },
  )

  if (r.status !== 0) {
    console.error(r.stderr || r.stdout || 'ffmpeg failed')
    process.exitCode = 1
  } else {
    console.log(`Wrote ${OUT}`)
  }
}

async function main() {
  mkdirSync(dirname(OUT), { recursive: true })
  clearCache()

  const browser = await chromium.launch({ headless: true })
  try {
    const page = await browser.newPage({
      viewport: VIEWPORT,
    })
    await captureFrames(page)
  } finally {
    await browser.close()
  }

  ffmpegToGif()
  rmSync(CACHE, { recursive: true, force: true })
}

main().catch((e) => {
  console.error(e)
  process.exitCode = 1
})
