/**
 * **jumppad** - Crafters of fine Open Source products
 *
 * @domain `jumppad.dev`
 *
 * @install `pkgx jumppad.dev`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.jumppaddev
 * console.log(pkg.name)        // "jumppad"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/jumppad-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const jumppaddevPackage = {
  /**
   * The display name of this package.
   */
  name: 'jumppad' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/jumppad.dev/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'jumppad.dev' as const,
  fullPath: 'jumppad.dev' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx jumppad.dev' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type JumppaddevPackage = typeof jumppaddevPackage
