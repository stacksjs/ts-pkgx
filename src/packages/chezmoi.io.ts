/**
 * **chezmoi** - Crafters of fine Open Source products
 *
 * @domain `chezmoi.io`
 *
 * @install `pkgx chezmoi.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.chezmoiio
 * console.log(pkg.name)        // "chezmoi"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/chezmoi-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const chezmoiioPackage = {
  /**
   * The display name of this package.
   */
  name: 'chezmoi' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/chezmoi.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'chezmoi.io' as const,
  fullPath: 'chezmoi.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx chezmoi.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type ChezmoiioPackage = typeof chezmoiioPackage
