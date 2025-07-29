/**
 * **endoflife.date** - Package from pantry: endoflife.date
 *
 * @domain `endoflife.date`
 *
 * @install `launchpad install endoflife.date`
 * @dependencies `python.org^3.12`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.endoflifedate
 * console.log(pkg.name)        // "endoflife.date"
 * console.log(pkg.description) // "Package from pantry: endoflife.date"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/endoflife-date.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const endoflifedatePackage = {
  /**
   * The display name of this package.
   */
  name: 'endoflife.date' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'endoflife.date' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: endoflife.date' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install endoflife.date' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +endoflife.date -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install endoflife.date' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org^3.12',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/endoflife.date/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type EndoflifedatePackage = typeof endoflifedatePackage
