/**
 * Utility functions for handling package domains and nested paths
 * These utilities help standardize the naming conventions for TypeScript files
 */

/**
 * Converts a domain name to a safe TypeScript variable name
 * @param domain Domain name (e.g., 'bun.sh', 'agwa.name/git-crypt')
 * @returns Safe TypeScript variable name (e.g., 'bunsh', 'agwanamegitcrypt')
 */
export function convertDomainToVarName(domain: string): string {
  // Handle nested paths
  if (domain.includes('/')) {
    const [parentDomain, subPath] = domain.split('/')
    // Remove all dots and dashes from both parts
    const cleanParent = parentDomain.replace(/[.-]/g, '')
    const cleanSubPath = subPath.replace(/[.-]/g, '')

    // Combine both parts without any separator
    return `${cleanParent}${cleanSubPath}`.toLowerCase()
  }

  // Regular domains like 'bun.sh' -> 'bunsh'
  return domain.replace(/[.-]/g, '').toLowerCase()
}

/**
 * Converts a domain name to a standard format for file names
 * @param domain Domain name or path
 * @returns Filename-safe version (e.g., 'bun.sh' -> 'bunsh', 'agwa.name/git-crypt' -> 'agwaname-gitcrypt')
 */
export function convertDomainToFileName(domain: string): string {
  // Handle nested paths consistently with convertDomainToVarName function
  if (domain.includes('/')) {
    const [parentDomain, subPath] = domain.split('/')
    // Clean the parent domain (remove dots)
    const cleanParent = parentDomain.replace(/\./g, '')

    // For filenames, preserve special characters in the subpath to ensure uniqueness
    // This ensures paths like 'apple.com/remote_cmds' become 'applecom-remote_cmds'
    const safeSubPath = subPath.replace(/\//g, '-')

    // For filenames, we use a hyphen between parent and subpath to maintain readability
    return `${cleanParent}-${safeSubPath}`.toLowerCase()
  }

  // Regular domains like 'bun.sh' -> 'bunsh'
  return domain.replace(/\./g, '').toLowerCase()
}

/**
 * Attempts to guess a domain name from a filename
 * @param fileName The filename (without extension)
 * @returns Best guess at the original domain
 */
export function guessOriginalDomain(fileName: string): string {
  // First check if it's a nested path (has a dash)
  if (fileName.includes('-')) {
    // Could be a nested path like 'agwaname-git-crypt'
    // We'll use the first dash to identify parent domain vs subpath
    const firstDashIndex = fileName.indexOf('-')
    const parentDomainFileName = fileName.substring(0, firstDashIndex)
    const subPath = fileName.substring(firstDashIndex + 1)

    // Try to reconstruct domain parts
    let domain = parentDomainFileName
    // Add dots for common domain extensions - only do this if there isn't already a dot
    if (domain.endsWith('org') && !domain.endsWith('.org'))
      domain = domain.replace(/org$/, '.org')
    if (domain.endsWith('io') && !domain.endsWith('.io'))
      domain = domain.replace(/io$/, '.io')
    if (domain.endsWith('com') && !domain.endsWith('.com'))
      domain = domain.replace(/com$/, '.com')
    if (domain.endsWith('sh') && !domain.endsWith('.sh'))
      domain = domain.replace(/sh$/, '.sh')
    if (domain.endsWith('dev') && !domain.endsWith('.dev'))
      domain = domain.replace(/dev$/, '.dev')
    if (domain.endsWith('net') && !domain.endsWith('.net'))
      domain = domain.replace(/net$/, '.net')
    if (domain.endsWith('name') && !domain.endsWith('.name'))
      domain = domain.replace(/name$/, '.name')

    // Reconstruct the nested path, preserving the original subpath (including special characters)
    return `${domain}/${subPath}`
  }

  // Not a nested path, just add dots for common domains
  let domain = fileName
  // Add dots for common domain extensions - only do this if there isn't already a dot
  if (domain.endsWith('org') && !domain.endsWith('.org'))
    domain = domain.replace(/org$/, '.org')
  if (domain.endsWith('io') && !domain.endsWith('.io'))
    domain = domain.replace(/io$/, '.io')
  if (domain.endsWith('com') && !domain.endsWith('.com'))
    domain = domain.replace(/com$/, '.com')
  if (domain.endsWith('sh') && !domain.endsWith('.sh'))
    domain = domain.replace(/sh$/, '.sh')
  if (domain.endsWith('dev') && !domain.endsWith('.dev'))
    domain = domain.replace(/dev$/, '.dev')
  if (domain.endsWith('net') && !domain.endsWith('.net'))
    domain = domain.replace(/net$/, '.net')
  if (domain.endsWith('land') && !domain.endsWith('.land'))
    domain = domain.replace(/land$/, '.land')

  return domain
}
