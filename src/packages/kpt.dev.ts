/**
 * **kpt** - Crafters of fine Open Source products
 *
 * @domain `kpt.dev`
 *
 * @install `pkgx kpt.dev`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.kptdev
 * console.log(pkg.name)        // "kpt"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/kpt-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const kptdevPackage = {
  /**
   * The display name of this package.
   */
  name: 'kpt' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/kpt.dev/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'kpt.dev' as const,
  fullPath: 'kpt.dev' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx kpt.dev' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type KptdevPackage = typeof kptdevPackage
