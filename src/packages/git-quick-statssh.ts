/**
 * **git-quick-stats** - ▁▅▆▃▅ Git quick statistics is a simple and efficient way to access various statistics in git repository.
 *
 * @domain `git-quick-stats.sh`
 * @programs `git-quick-stats`
 * @version `2.7.0` (14 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install git-quick-stats`
 * @name `git-quick-stats`
 * @dependencies `git-scm.org`, `gnu.org/bash`, `linux:github.com/util-linux/util-linux` (includes OS-specific dependencies with `os:package` format)
 * @companions `gnu.org/coreutils`, `invisible-island.net/ncurses`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.gitquickstats
 * // Or access via domain
 * const samePkg = pantry.gitquickstatssh
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "git-quick-stats"
 * console.log(pkg.description) // "▁▅▆▃▅ Git quick statistics is a simple and effi..."
 * console.log(pkg.programs)    // ["git-quick-stats"]
 * console.log(pkg.versions[0]) // "2.7.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/git-quick-stats-sh.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gitquickstatsPackage = {
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
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install git-quick-stats' as const,
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
    'invisible-island.net/ncurses',
  ] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'git-scm.org',
    'gnu.org/bash',
    'linux:github.com/util-linux/util-linux',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.7.0',
    '2.6.2',
    '2.6.1',
    '2.6.0',
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
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) git-quick-stats -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install git-quick-stats' as const,
}

export type GitquickstatsPackage = typeof gitquickstatsPackage
