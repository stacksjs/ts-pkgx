/**
 * **pip** - The Python package installer
 *
 * @domain `pip.pypa.io`
 * @programs `pip`, `pip3.8`, `pip3.9`, `pip3.10`, `pip3.11`
 * @version `25.1.1` (27 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +pip.pypa.io -- $SHELL -i`
 * @aliases `pip`
 * @dependencies `pkgx.sh^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.pip
 * // Or access via domain
 * const samePkg = pantry.pippypaio
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "pip.pypa.io"
 * console.log(pkg.description) // "The Python package installer"
 * console.log(pkg.programs)    // ["pip", "pip3.8", ...]
 * console.log(pkg.versions[0]) // "25.1.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pip-pypa-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pipPackage = {
  /**
   * The display name of this package.
   */
  name: 'pip.pypa.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'pip.pypa.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'The Python package installer' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/pip.pypa.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +pip.pypa.io -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'pip',
    'pip3.8',
    'pip3.9',
    'pip3.10',
    'pip3.11',
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
    '25.1.1',
    '25.1.0',
    '25.0.1',
    '25.0.0',
    '24.3.1',
    '24.3.0',
    '24.2.0',
    '24.1.2',
    '24.1.1',
    '24.1.0',
    '24.0.0',
    '23.3.2',
    '23.3.1',
    '23.3.0',
    '23.2.1',
    '23.2.0',
    '23.1.2',
    '23.1.1',
    '23.1.0',
    '23.0.1',
    '23.0.0',
    '22.3.1',
    '22.3.0',
    '21.3.1',
    '20.3.4',
    '19.3.1',
    '18.1.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'pip',
  ] as const,
}

export type PipPackage = typeof pipPackage
