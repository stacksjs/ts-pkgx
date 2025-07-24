/**
 * **mash** - mash up millions of open source packages into monstrously powerful scripts
 *
 * @domain `pkgx.sh/mash`
 * @programs `mash`
 * @version `0.4.0` (5 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install mash`
 * @name `mash`
 * @dependencies `pkgx.sh^1.1,^2`, `gnu.org/bash`, `curl.se`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.mash
 * // Or access via domain
 * const samePkg = pantry.pkgxshmash
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "mash"
 * console.log(pkg.description) // "mash up millions of open source packages into m..."
 * console.log(pkg.programs)    // ["mash"]
 * console.log(pkg.versions[0]) // "0.4.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pkgx-sh/mash.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mashPackage = {
  /**
   * The display name of this package.
   */
  name: 'mash' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'pkgx.sh/mash' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'mash up millions of open source packages into monstrously powerful scripts' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/pkgx.sh/mash/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install mash' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'mash',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pkgx.sh^1.1,^2',
    'gnu.org/bash',
    'curl.se',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.4.0',
    '0.3.1',
    '0.3.0',
    '0.2.0',
    '0.1.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) mash -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install mash' as const,
}

export type MashPackage = typeof mashPackage
