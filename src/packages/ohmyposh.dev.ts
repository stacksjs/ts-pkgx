/**
 * **oh-my-posh** - Crafters of fine Open Source products
 *
 * @domain `ohmyposh.dev`
 *
 * @install `pkgx ohmyposh.dev`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.ohmyposhdev
 * console.log(pkg.name)        // "oh-my-posh"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/ohmyposh-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ohmyposhdevPackage = {
  /**
   * The display name of this package.
   */
  name: 'oh-my-posh' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/ohmyposh.dev/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'ohmyposh.dev' as const,
  fullPath: 'ohmyposh.dev' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx ohmyposh.dev' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type OhmyposhdevPackage = typeof ohmyposhdevPackage
