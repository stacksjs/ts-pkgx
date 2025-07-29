/**
 * **terminal-notifier** - Package from pantry: github.com/julienXX/terminal-notifier
 *
 * @domain `github.com/julienXX/terminal-notifier`
 *
 * @install `launchpad install github.com/julienXX/terminal-notifier`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomjulienxxterminalnotifier
 * console.log(pkg.name)        // "terminal-notifier"
 * console.log(pkg.description) // "Package from pantry: github.com/julienXX/termin..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/julienXX/terminal-notifier.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomjulienxxterminalnotifierPackage = {
  /**
   * The display name of this package.
   */
  name: 'terminal-notifier' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/julienXX/terminal-notifier' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/julienXX/terminal-notifier' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/julienXX/terminal-notifier' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/julienXX/terminal-notifier -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/julienXX/terminal-notifier' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/julienXX/terminal-notifier/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomjulienxxterminalnotifierPackage = typeof githubcomjulienxxterminalnotifierPackage
