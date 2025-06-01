/**
 * **git-quick-stats** - Crafters of fine Open Source products
 *
 * @domain `git-quick-stats.sh`
 *
 * @install `pkgx git-quick-stats.sh`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gitquickstatssh
 * console.log(pkg.name)        // "git-quick-stats"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/git-quick-stats-sh.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gitquickstatsshPackage = {
  /**
   * The display name of this package.
   */
  name: 'git-quick-stats' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/git-quick-stats.sh/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'git-quick-stats.sh' as const,
  fullPath: 'git-quick-stats.sh' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx git-quick-stats.sh' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type GitquickstatsshPackage = typeof gitquickstatsshPackage
