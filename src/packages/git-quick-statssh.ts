/**
 * **git-quick-stats.sh** - Package from pantry: git-quick-stats.sh
 *
 * @domain `git-quick-stats.sh`
 *
 * @install `launchpad install git-quick-stats.sh`
 * @dependencies `git-scm.org`, `gnu.org/bash`, `github.com/util-linux/util-linux`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gitquickstatssh
 * console.log(pkg.name)        // "git-quick-stats.sh"
 * console.log(pkg.description) // "Package from pantry: git-quick-stats.sh"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/git-quick-stats-sh.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gitquickstatsshPackage = {
  /**
   * The display name of this package.
   */
  name: 'git-quick-stats.sh' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'git-quick-stats.sh' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: git-quick-stats.sh' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install git-quick-stats.sh' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'git-scm.org',
    'gnu.org/bash',
    'github.com/util-linux/util-linux',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/git-quick-stats.sh/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GitquickstatsshPackage = typeof gitquickstatsshPackage
