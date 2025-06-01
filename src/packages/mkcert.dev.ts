/**
 * **mkcert** - Crafters of fine Open Source products
 *
 * @domain `mkcert.dev`
 *
 * @install `pkgx mkcert.dev`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.mkcertdev
 * console.log(pkg.name)        // "mkcert"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/mkcert-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mkcertdevPackage = {
  /**
   * The display name of this package.
   */
  name: 'mkcert' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/mkcert.dev/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'mkcert.dev' as const,
  fullPath: 'mkcert.dev' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx mkcert.dev' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type MkcertdevPackage = typeof mkcertdevPackage
