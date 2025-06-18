/**
 * **neovim** - pkgx package
 *
 * @domain `github.com/neovim`
 *
 * @install `pkgx github.com/neovim`
 * @name `neovim`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.neovim
 * // Or access via domain
 * const samePkg = pantry.githubcomneovim
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "neovim"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/neovim.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const neovimPackage = {
  /**
   * The display name of this package.
   */
  name: 'neovim' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/neovim' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/neovim' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/neovim' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/neovim' as const,
}

export type NeovimPackage = typeof neovimPackage
