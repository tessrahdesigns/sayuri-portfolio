const STORAGE_PREFIX = 'sayuri_case_gate:'

/** Slugs that require the shared access password before viewing. */
const PROTECTED_SLUGS = new Set([
  'audi-dealer-ecosystem',
  'dealer-theme-portal',
  'customer-care-centre-mobile-app',
])

function gatePassword() {
  return 'accessgranted'
}

export function isProtectedCaseSlug(slug) {
  return Boolean(slug && PROTECTED_SLUGS.has(slug))
}

/** localStorage key for this project’s unlock flag (cross-tab sync). */
export function storageKeyForCaseSlug(slug) {
  return `${STORAGE_PREFIX}${slug}`
}

export function hasCaseSlugUnlocked(slug) {
  if (!slug || !isProtectedCaseSlug(slug)) return true
  try {
    return localStorage.getItem(storageKeyForCaseSlug(slug)) === '1'
  } catch {
    return false
  }
}

export function unlockCaseSlug(slug) {
  if (!slug || !isProtectedCaseSlug(slug)) return
  try {
    localStorage.setItem(storageKeyForCaseSlug(slug), '1')
  } catch {
    // Private mode / quota: parent keeps in-memory gateOpen.
  }
}

export function passwordMatchesCaseGate(input) {
  return String(input ?? '').trim() === gatePassword()
}
