/**
 * **liblqr.wikidot.com** - Crafters of fine Open Source products
 *
 * @domain `liblqr.wikidot.com`
 *
 * @install `pkgx liblqr.wikidot.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.liblqrwikidotcom
 * console.log(pkg.name)        // "liblqr.wikidot.com"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/liblqr-wikidot-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const liblqrwikidotcomPackage = {
  /**
   * The display name of this package.
   */
  name: 'liblqr.wikidot.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/liblqr.wikidot.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'liblqr.wikidot.com' as const,
  fullPath: 'liblqr.wikidot.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx liblqr.wikidot.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type LiblqrwikidotcomPackage = typeof liblqrwikidotcomPackage
