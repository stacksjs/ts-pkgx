/**
 * **digger** - Crafters of fine Open Source products
 *
 * @domain `digger.dev`
 *
 * @install `pkgx digger.dev`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.diggerdev
 * console.log(pkg.name)        // "digger"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/digger-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const diggerdevPackage = {
  /**
   * The display name of this package.
   */
  name: 'digger' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/digger.dev/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'digger.dev' as const,
  fullPath: 'digger.dev' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx digger.dev' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type DiggerdevPackage = typeof diggerdevPackage
