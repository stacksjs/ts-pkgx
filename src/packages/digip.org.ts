/**
 * **digip.org** - Go home.
 *
 * @domain `digip.org`
 *
 * @install `pkgx digip.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.digiporg
 * console.log(pkg.name)        // "digip.org"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/digip-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const digiporgPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/digip.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'digip.org' as const,
  fullPath: 'digip.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx digip.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type DigiporgPackage = typeof digiporgPackage
