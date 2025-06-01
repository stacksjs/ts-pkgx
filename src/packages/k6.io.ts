/**
 * **k6** - Crafters of fine Open Source products
 *
 * @domain `k6.io`
 *
 * @install `pkgx k6.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.k6io
 * console.log(pkg.name)        // "k6"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/k6-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const k6ioPackage = {
  /**
   * The display name of this package.
   */
  name: 'k6' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/k6.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'k6.io' as const,
  fullPath: 'k6.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx k6.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type K6ioPackage = typeof k6ioPackage
