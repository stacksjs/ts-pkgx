/**
 * **procps-ng/procps** - pkgx package
 *
 * @domain `gitlab.com/procps-ng/procps`
 * @programs `free`, `pgrep`, `pidof`, `pkill`, `pmap`, ... (+8 more)
 * @version `4.0.5` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +gitlab.com/procps-ng/procps -- $SHELL -i`
 * @aliases `procps-ng/procps`
 * @dependencies `invisible-island.net/ncurses>=6.0`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.procpsngprocps
 * // Or access via domain
 * const samePkg = pantry.gitlabcomprocpsngprocps
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "gitlab.com/procps-ng/procps"
 * console.log(pkg.programs)    // ["free", "pgrep", ...]
 * console.log(pkg.versions[0]) // "4.0.5" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gitlab-com/procps-ng/procps.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const procpsngprocpsPackage = {
  /**
   * The display name of this package.
   */
  name: 'gitlab.com/procps-ng/procps' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gitlab.com/procps-ng/procps' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gitlab.com/procps-ng/procps/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +gitlab.com/procps-ng/procps -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'free',
    'pgrep',
    'pidof',
    'pkill',
    'pmap',
    'ps',
    'pwdx',
    'slabtop',
    'sysctl',
    'tload',
    'top',
    'vmstat',
    'w',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'invisible-island.net/ncurses>=6.0',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '4.0.5',
    '4.0.4',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'procps-ng/procps',
  ] as const,
  fullPath: 'gitlab.com/procps-ng/procps' as const,
}

export type ProcpsngprocpsPackage = typeof procpsngprocpsPackage
