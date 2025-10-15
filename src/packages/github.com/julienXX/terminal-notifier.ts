/**
 * **terminal-notifier** - Send User Notifications on macOS from the command-line.
 *
 * @domain `github.com/julienXX/terminal-notifier`
 * @programs `terminal-notifier`
 * @version `2.0.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install github.com/julienXX/terminal-notifier`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomjulienxxterminalnotifier
 * console.log(pkg.name)        // "terminal-notifier"
 * console.log(pkg.description) // "Send User Notifications on macOS from the comma..."
 * console.log(pkg.programs)    // ["terminal-notifier"]
 * console.log(pkg.versions[0]) // "2.0.0" (latest)
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
  description: 'Send User Notifications on macOS from the command-line.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/julienXX/terminal-notifier/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/julienXX/terminal-notifier' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/julienXX/terminal-notifier' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/julienXX/terminal-notifier -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/julienXX/terminal-notifier' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'terminal-notifier',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.0.0',
  ] as const,
  aliases: [] as const,
}

export type GithubcomjulienxxterminalnotifierPackage = typeof githubcomjulienxxterminalnotifierPackage
