/**
 * **lz4** - Crafters of fine Open Source products
 *
 * @domain `lz4.org`
 *
 * @install `pkgx lz4.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.lz4org
 * console.log(pkg.name)        // "lz4"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/lz4-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const lz4orgPackage = {
  /**
   * The display name of this package.
   */
  name: 'lz4' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/lz4.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'lz4.org' as const,
  fullPath: 'lz4.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx lz4.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type Lz4orgPackage = typeof lz4orgPackage
