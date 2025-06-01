/**
 * **alacritty** - Crafters of fine Open Source products
 *
 * @domain `alacritty.org`
 *
 * @install `pkgx alacritty.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.alacrittyorg
 * console.log(pkg.name)        // "alacritty"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/alacritty-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const alacrittyorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'alacritty' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/alacritty.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'alacritty.org' as const,
  fullPath: 'alacritty.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx alacritty.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type AlacrittyorgPackage = typeof alacrittyorgPackage
