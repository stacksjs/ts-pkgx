/**
 * **ticker** - Terminal stock ticker with live updates and position tracking
 *
 * @domain `github.com/achannarasappa/ticker`
 * @programs `ticker`
 * @version `5.0.6` (12 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install ticker`
 * @name `ticker`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.ticker
 * // Or access via domain
 * const samePkg = pantry.githubcomachannarasappaticker
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "ticker"
 * console.log(pkg.description) // "Terminal stock ticker with live updates and pos..."
 * console.log(pkg.programs)    // ["ticker"]
 * console.log(pkg.versions[0]) // "5.0.6" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/achannarasappa/ticker.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const tickerPackage = {
  /**
   * The display name of this package.
   */
  name: 'ticker' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/achannarasappa/ticker' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Terminal stock ticker with live updates and position tracking' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/achannarasappa/ticker/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install ticker' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'ticker',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '5.0.6',
    '5.0.5',
    '5.0.4',
    '5.0.3',
    '5.0.2',
    '5.0.1',
    '5.0.0',
    '4.8.1',
    '4.8.0',
    '4.7.1',
    '4.7.0',
    '4.6.3',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) ticker -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install ticker' as const,
}

export type TickerPackage = typeof tickerPackage
