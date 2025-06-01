/**
 * **onefetch** - Crafters of fine Open Source products
 *
 * @domain `onefetch.dev`
 *
 * @install `pkgx onefetch.dev`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.onefetchdev
 * console.log(pkg.name)        // "onefetch"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/onefetch-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const onefetchdevPackage = {
  /**
   * The display name of this package.
   */
  name: 'onefetch' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/onefetch.dev/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'onefetch.dev' as const,
  fullPath: 'onefetch.dev' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx onefetch.dev' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type OnefetchdevPackage = typeof onefetchdevPackage
