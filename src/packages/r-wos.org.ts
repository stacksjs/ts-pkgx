/**
 * **r-wos.org** - Go home.
 *
 * @domain `r-wos.org`
 *
 * @install `pkgx r-wos.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.rwosorg
 * console.log(pkg.name)        // "r-wos.org"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/r-wos-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const rwosorgPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/r-wos.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'r-wos.org' as const,
  fullPath: 'r-wos.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx r-wos.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type RwosorgPackage = typeof rwosorgPackage
