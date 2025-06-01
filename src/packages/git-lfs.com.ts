/**
 * **git-lfs** - Crafters of fine Open Source products
 *
 * @domain `git-lfs.com`
 *
 * @install `pkgx git-lfs.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gitlfscom
 * console.log(pkg.name)        // "git-lfs"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/git-lfs-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gitlfscomPackage = {
  /**
   * The display name of this package.
   */
  name: 'git-lfs' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/git-lfs.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'git-lfs.com' as const,
  fullPath: 'git-lfs.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx git-lfs.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type GitlfscomPackage = typeof gitlfscomPackage
