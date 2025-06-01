/**
 * **wait4x** - Crafters of fine Open Source products
 *
 * @domain `wait4x.dev`
 *
 * @install `pkgx wait4x.dev`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.wait4xdev
 * console.log(pkg.name)        // "wait4x"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/wait4x-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const wait4xdevPackage = {
  /**
   * The display name of this package.
   */
  name: 'wait4x' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/wait4x.dev/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'wait4x.dev' as const,
  fullPath: 'wait4x.dev' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx wait4x.dev' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type Wait4xdevPackage = typeof wait4xdevPackage
