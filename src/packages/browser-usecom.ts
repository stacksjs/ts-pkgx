/**
 * **browser-use.com** - Make websites accessible for AI agents
 *
 * @domain `browser-use.com`
 * @version `0.7.1` (45 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install browser-use.com`
 * @dependencies `python.org~3.12 # no torch<2.3.0 for 3.13`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.browserusecom
 * console.log(pkg.name)        // "browser-use.com"
 * console.log(pkg.description) // "Make websites accessible for AI agents"
 * console.log(pkg.versions[0]) // "0.7.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/browser-use-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const browserusecomPackage = {
  /**
   * The display name of this package.
   */
  name: 'browser-use.com' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'browser-use.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Make websites accessible for AI agents' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/browser-use.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install browser-use.com' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org~3.12 # no torch<2.3.0 for 3.13',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.7.1',
    '0.7.0',
    '0.6.3',
    '0.6.2',
    '0.6.1',
    '0.6.0',
    '0.5.11',
    '0.5.10',
    '0.5.9',
    '0.5.8',
    '0.5.7',
    '0.5.6',
    '0.5.5',
    '0.5.4',
    '0.5.3',
    '0.5.2',
    '0.5.1',
    '0.5.0',
    '0.4.5',
    '0.4.4',
    '0.4.3',
    '0.4.2',
    '0.3.3',
    '0.3.2',
    '0.3.1',
    '0.3.0',
    '0.2.7',
    '0.2.6',
    '0.2.5',
    '0.2.4',
    '0.2.3',
    '0.2.2',
    '0.2.1',
    '0.1.48',
    '0.1.47',
    '0.1.46',
    '0.1.45',
    '0.1.44',
    '0.1.43',
    '0.1.42',
    '0.1.41',
    '0.1.40',
    '0.1.39',
    '0.1.38',
    '0.1.37',
  ] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +browser-use.com -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install browser-use.com' as const,
}

export type BrowserusecomPackage = typeof browserusecomPackage
