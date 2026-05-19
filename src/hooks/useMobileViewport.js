import { useSyncExternalStore } from 'react'

/** Matches `sayuri.css` mobile breakpoint (`max-width: 768px`). */
const QUERY = '(max-width: 768px)'

function subscribe(onStoreChange) {
  const mq = window.matchMedia(QUERY)
  mq.addEventListener('change', onStoreChange)
  return () => mq.removeEventListener('change', onStoreChange)
}

function getSnapshot() {
  return window.matchMedia(QUERY).matches
}

function getServerSnapshot() {
  return false
}

export function useMobileViewport() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}

/** Canonical path for the projects listing (all viewports). */
export function useProjectsIndexPath() {
  return '/projects'
}
