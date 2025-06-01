/**
 * **libsoup.org** - Crafters of fine Open Source products
 *
 * @domain `libsoup.org`
 *
 * @install `pkgx libsoup.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.libsouporg
 * console.log(pkg.name)        // "libsoup.org"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/libsoup-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libsouporgPackage = {
  /**
   * The display name of this package.
   */
  name: 'libsoup.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/libsoup.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'libsoup.org' as const,
  fullPath: 'libsoup.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx libsoup.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type LibsouporgPackage = typeof libsouporgPackage
