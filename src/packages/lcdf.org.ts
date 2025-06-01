/**
 * **lcdf.org** - Go home.
 *
 * @domain `lcdf.org`
 *
 * @install `pkgx lcdf.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.lcdforg
 * console.log(pkg.name)        // "lcdf.org"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/lcdf-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const lcdforgPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/lcdf.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'lcdf.org' as const,
  fullPath: 'lcdf.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx lcdf.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type LcdforgPackage = typeof lcdforgPackage
