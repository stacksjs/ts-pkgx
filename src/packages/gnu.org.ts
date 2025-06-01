/**
 * **gnu.org** - Go home.
 *
 * @domain `gnu.org`
 *
 * @install `pkgx gnu.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gnuorg
 * console.log(pkg.name)        // "gnu.org"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnu-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gnuorgPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/gnu.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnu.org' as const,
  fullPath: 'gnu.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx gnu.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type GnuorgPackage = typeof gnuorgPackage
