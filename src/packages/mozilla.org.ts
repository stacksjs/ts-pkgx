/**
 * **mozilla.org** - Go home.
 *
 * @domain `mozilla.org`
 *
 * @install `pkgx mozilla.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.mozillaorg
 * console.log(pkg.name)        // "mozilla.org"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/mozilla-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mozillaorgPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/mozilla.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'mozilla.org' as const,
  fullPath: 'mozilla.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx mozilla.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type MozillaorgPackage = typeof mozillaorgPackage
