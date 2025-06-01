/**
 * **virtualsquare.org** - Go home.
 *
 * @domain `virtualsquare.org`
 *
 * @install `pkgx virtualsquare.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.virtualsquareorg
 * console.log(pkg.name)        // "virtualsquare.org"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/virtualsquare-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const virtualsquareorgPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/virtualsquare.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'virtualsquare.org' as const,
  fullPath: 'virtualsquare.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx virtualsquare.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type VirtualsquareorgPackage = typeof virtualsquareorgPackage
