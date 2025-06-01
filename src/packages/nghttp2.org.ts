/**
 * **nghttp2.org** - Crafters of fine Open Source products
 *
 * @domain `nghttp2.org`
 *
 * @install `pkgx nghttp2.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.nghttp2org
 * console.log(pkg.name)        // "nghttp2.org"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/nghttp2-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const nghttp2orgPackage = {
  /**
   * The display name of this package.
   */
  name: 'nghttp2.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/nghttp2.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'nghttp2.org' as const,
  fullPath: 'nghttp2.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx nghttp2.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type Nghttp2orgPackage = typeof nghttp2orgPackage
