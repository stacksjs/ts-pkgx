/**
 * **x.org** - Go home.
 *
 * @domain `x.org`
 *
 * @install `pkgx x.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.xorg
 * console.log(pkg.name)        // "x.org"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/x-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xorgPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/x.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'x.org' as const,
  fullPath: 'x.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx x.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type XorgPackage = typeof xorgPackage
