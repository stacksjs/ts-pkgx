/**
 * **logdy** - Crafters of fine Open Source products
 *
 * @domain `logdy.dev`
 *
 * @install `pkgx logdy.dev`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.logdydev
 * console.log(pkg.name)        // "logdy"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/logdy-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const logdydevPackage = {
  /**
   * The display name of this package.
   */
  name: 'logdy' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/logdy.dev/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'logdy.dev' as const,
  fullPath: 'logdy.dev' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx logdy.dev' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type LogdydevPackage = typeof logdydevPackage
