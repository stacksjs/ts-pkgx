/**
 * **zsh** - Crafters of fine Open Source products
 *
 * @domain `zsh.sourceforge.io`
 *
 * @install `pkgx zsh.sourceforge.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.zshsourceforgeio
 * console.log(pkg.name)        // "zsh"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/zsh-sourceforge-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const zshsourceforgeioPackage = {
  /**
   * The display name of this package.
   */
  name: 'zsh' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/zsh.sourceforge.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'zsh.sourceforge.io' as const,
  fullPath: 'zsh.sourceforge.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx zsh.sourceforge.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type ZshsourceforgeioPackage = typeof zshsourceforgeioPackage
