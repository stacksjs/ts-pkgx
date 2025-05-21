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
    // Convert domains like 'agwa.name/git-crypt' to 'agwanamegitcrypt'
    // Remove dashes for variable names since they're not valid in variable names
    return parentDomain.replace(/\./g, '') + subPath.replace(/-/g, '').toLowerCase()
  }

  // Regular domains like 'bun.sh' -> 'bunsh'
  return domain.replace(/\./g, '').toLowerCase()
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
    // Convert domain like 'agwa.name/git-crypt' to 'agwaname-gitcrypt'
    // Keep dashes in the subPath to maintain readability and uniqueness
    return `${parentDomain.replace(/\./g, '')}-${subPath}`
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
    // Add dots for common domain extensions
    if (domain.endsWith('org'))
      domain = domain.replace(/org$/, '.org')
    if (domain.endsWith('io'))
      domain = domain.replace(/io$/, '.io')
    if (domain.endsWith('com'))
      domain = domain.replace(/com$/, '.com')
    if (domain.endsWith('sh'))
      domain = domain.replace(/sh$/, '.sh')
    if (domain.endsWith('dev'))
      domain = domain.replace(/dev$/, '.dev')
    if (domain.endsWith('net'))
      domain = domain.replace(/net$/, '.net')
    if (domain.endsWith('name'))
      domain = domain.replace(/name$/, '.name')

    // Reconstruct the nested path, preserving dashes in the subpath
    return `${domain}/${subPath}`
  }

  // Not a nested path, just add dots for common domains
  let domain = fileName
  if (domain.endsWith('org'))
    domain = domain.replace(/org$/, '.org')
  if (domain.endsWith('io'))
    domain = domain.replace(/io$/, '.io')
  if (domain.endsWith('com'))
    domain = domain.replace(/com$/, '.com')
  if (domain.endsWith('sh'))
    domain = domain.replace(/sh$/, '.sh')
  if (domain.endsWith('dev'))
    domain = domain.replace(/dev$/, '.dev')
  if (domain.endsWith('net'))
    domain = domain.replace(/net$/, '.net')
  if (domain.endsWith('land'))
    domain = domain.replace(/land$/, '.land')

  return domain
}
