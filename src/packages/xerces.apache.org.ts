/**
 * **xerces.apache.org** - Go home.
 *
 * @domain `xerces.apache.org`
 *
 * @install `pkgx xerces.apache.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.xercesapacheorg
 * console.log(pkg.name)        // "xerces.apache.org"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/xerces-apache-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xercesapacheorgPackage = {
  /**
   * The display name of this package.
   */
  name: '' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Go home.' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/xerces.apache.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'xerces.apache.org' as const,
  fullPath: 'xerces.apache.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx xerces.apache.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type XercesapacheorgPackage = typeof xercesapacheorgPackage
