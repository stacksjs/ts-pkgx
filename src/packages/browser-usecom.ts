/**
 * **browser-use.com** - Package from pantry: browser-use.com
 *
 * @domain `browser-use.com`
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
 * console.log(pkg.description) // "Package from pantry: browser-use.com"
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
  description: 'Package from pantry: browser-use.com' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install browser-use.com' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +browser-use.com -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install browser-use.com' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org~3.12 # no torch<2.3.0 for 3.13',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/browser-use.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type BrowserusecomPackage = typeof browserusecomPackage
