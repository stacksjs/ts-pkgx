/**
 * **bashly** - Crafters of fine Open Source products
 *
 * @domain `bashly.dannyb.co`
 *
 * @install `pkgx bashly.dannyb.co`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.bashlydannybco
 * console.log(pkg.name)        // "bashly"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/bashly-dannyb-co.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const bashlydannybcoPackage = {
  /**
   * The display name of this package.
   */
  name: 'bashly' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/bashly.dannyb.co/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'bashly.dannyb.co' as const,
  fullPath: 'bashly.dannyb.co' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx bashly.dannyb.co' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type BashlydannybcoPackage = typeof bashlydannybcoPackage
