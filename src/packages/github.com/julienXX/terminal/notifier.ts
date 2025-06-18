/**
 * **github.com/julienXX/terminal-notifier** - pkgx package
 *
 * @domain `github.com/julienXX/terminal/notifier`
 *
 * @install `pkgx github.com/julienXX/terminal-notifier`
 * @aliases `github.com/julienXX/terminal-notifier`, `julienXX/terminal-notifier`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomjulienXXterminalnotifier
 * // Or access via domain
 * const samePkg = pantry.githubcomjulienxxterminalnotifier
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "julienXX"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/julienXX/terminal/notifier.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomjulienXXterminalnotifierPackage = {
  /**
   * The display name of this package.
   */
  name: 'julienXX' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/julienXX/terminal/notifier' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/julienXX/terminal-notifier' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/julienXX/terminal-notifier',
    'julienXX/terminal-notifier',
  ] as const,
  fullPath: 'github.com/julienXX/terminal-notifier' as const,
}

export type GithubcomjulienXXterminalnotifierPackage = typeof githubcomjulienXXterminalnotifierPackage
