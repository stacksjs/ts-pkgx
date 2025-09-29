/**
 * **ipython** - Official repository for IPython itself. Other repos in the IPython organization contain things like the website, documentation builds, etc.
 *
 * @domain `ipython.org`
 * @programs `ipython`, `ipython3`
 * @version `9.6.0` (47 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install ipython`
 * @name `ipython`
 * @dependencies `pkgx.sh^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.ipython
 * // Or access via domain
 * const samePkg = pantry.ipythonorg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "ipython"
 * console.log(pkg.description) // "Official repository for IPython itself. Other r..."
 * console.log(pkg.programs)    // ["ipython", "ipython3"]
 * console.log(pkg.versions[0]) // "9.6.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/ipython-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ipythonPackage = {
  /**
   * The display name of this package.
   */
  name: 'ipython' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'ipython.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Official repository for IPython itself. Other repos in the IPython organization contain things like the website, documentation builds, etc.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/ipython.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install ipython' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'ipython',
    'ipython3',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pkgx.sh^1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '9.6.0',
    '9.5.0',
    '9.4.0',
    '9.3.0',
    '9.2.0',
    '9.1.0',
    '9.0.2',
    '9.0.1',
    '9.0.0',
    '8.37.0',
    '8.36.0',
    '8.35.0',
    '8.34.0',
    '8.33.0',
    '8.32.0',
    '8.31.0',
    '8.30.0',
    '8.29.0',
    '8.28.0',
    '8.27.0',
    '8.26.0',
    '8.25.0',
    '8.24.0',
    '8.23.0',
    '8.22.2',
    '8.22.1',
    '8.22.0',
    '8.21.0',
    '8.20.0',
    '8.19.1',
    '8.19.0',
    '8.18.1',
    '8.18.0',
    '8.17.2',
    '8.17.1',
    '8.17.0',
    '8.16.1',
    '8.16.0',
    '8.15.0',
    '8.14.0',
    '8.13.2',
    '8.13.1',
    '8.13.0',
    '8.12.3',
    '8.12.2',
    '8.12.1',
    '8.12.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +ipython.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install ipython' as const,
}

export type IpythonPackage = typeof ipythonPackage
