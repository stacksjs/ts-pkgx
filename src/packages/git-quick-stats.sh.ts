/**
 * **git-quick-stats** - ▁▅▆▃▅ Git quick statistics is a simple and efficient way to access various statistics in git repository.
 *
 * @domain `git-quick-stats.sh`
 * @programs `git-quick-stats`
 * @version `2.5.8` (10 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/git-quick-stats-sh.md
 * @install `sh <(curl https://pkgx.sh) git-quick-stats`
 * @dependencies `git-scm.org`, `gnu.org/bash`, `linuxgithub.com/util-linux/util-linux`, ... (+1 more)
 * @companions `gnu.org/coreutils`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.git-quick-statssh
 * console.log(pkg.name)        // "git-quick-stats"
 * console.log(pkg.description) // "▁▅▆▃▅ Git quick statistics is a simple and effi..."
 * console.log(pkg.programs)    // ["git-quick-stats"]
 * console.log(pkg.versions[0]) // "2.5.8" (latest)
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
   * The canonical domain name for this package.
   */
  domain: 'git-quick-stats.sh' as const,
  /**
   * Brief description of what this package does.
   */
  description: '▁▅▆▃▅ Git quick statistics is a simple and efficient way to access various statistics in git repository.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/git-quick-stats.sh/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) git-quick-stats' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'git-quick-stats',
  ] as const,
  /**
   * Related packages that work well with this package.
   * Consider installing these for enhanced functionality.
   */
  companions: [
    'gnu.org/coreutils',
  ] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'git-scm.org',
    'gnu.org/bash',
    'linuxgithub.com/util-linux/util-linux',
    'github.com/util-linux/util-linux',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.5.8',
    '2.5.7',
    '2.5.6',
    '2.5.5',
    '2.5.4',
    '2.5.3',
    '2.5.2',
    '2.5.1',
    '2.5.0',
    '2.4.1',
  ] as const,
  fullPath: 'git-quick-stats.sh' as const,
  aliases: [] as const,
}

export type GitquickstatsshPackage = typeof gitquickstatsshPackage
