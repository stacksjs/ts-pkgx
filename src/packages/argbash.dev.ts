/**
 * **argbash** - Crafters of fine Open Source products
 *
 * @domain `argbash.dev`
 *
 * @install `pkgx argbash.dev`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.argbashdev
 * console.log(pkg.name)        // "argbash"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/argbash-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const argbashdevPackage = {
  /**
   * The display name of this package.
   */
  name: 'argbash' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/argbash.dev/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'argbash.dev' as const,
  fullPath: 'argbash.dev' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx argbash.dev' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type ArgbashdevPackage = typeof argbashdevPackage
