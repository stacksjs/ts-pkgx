/**
 * **watch** - Package from pantry: gitlab.com/procps-ng/watch
 *
 * @domain `gitlab.com/procps-ng/watch`
 *
 * @install `launchpad install gitlab.com/procps-ng/watch`
 * @dependencies `invisible-island.net/ncurses>=6.0`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gitlabcomprocpsngwatch
 * console.log(pkg.name)        // "watch"
 * console.log(pkg.description) // "Package from pantry: gitlab.com/procps-ng/watch"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gitlab-com/procps-ng/watch.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gitlabcomprocpsngwatchPackage = {
  /**
   * The display name of this package.
   */
  name: 'watch' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gitlab.com/procps-ng/watch' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: gitlab.com/procps-ng/watch' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gitlab.com/procps-ng/watch' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +gitlab.com/procps-ng/watch -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gitlab.com/procps-ng/watch' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'invisible-island.net/ncurses>=6.0',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gitlab.com/procps-ng/watch/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GitlabcomprocpsngwatchPackage = typeof gitlabcomprocpsngwatchPackage
