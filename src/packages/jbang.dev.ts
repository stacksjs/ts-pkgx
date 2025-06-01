/**
 * **jbang** - Crafters of fine Open Source products
 *
 * @domain `jbang.dev`
 *
 * @install `pkgx jbang.dev`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.jbangdev
 * console.log(pkg.name)        // "jbang"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/jbang-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const jbangdevPackage = {
  /**
   * The display name of this package.
   */
  name: 'jbang' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/jbang.dev/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'jbang.dev' as const,
  fullPath: 'jbang.dev' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx jbang.dev' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type JbangdevPackage = typeof jbangdevPackage
