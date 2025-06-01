/**
 * **changie** - Crafters of fine Open Source products
 *
 * @domain `changie.dev`
 *
 * @install `pkgx changie.dev`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.changiedev
 * console.log(pkg.name)        // "changie"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/changie-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const changiedevPackage = {
  /**
   * The display name of this package.
   */
  name: 'changie' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/changie.dev/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'changie.dev' as const,
  fullPath: 'changie.dev' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx changie.dev' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type ChangiedevPackage = typeof changiedevPackage
