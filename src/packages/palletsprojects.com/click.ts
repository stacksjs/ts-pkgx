/**
 * **python-click** - Python composable command line interface toolkit
 *
 * @domain `palletsprojects.com/click`
 * @version `8.2.2` (5 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install python-click`
 * @name `python-click`
 * @dependencies `python.org>=3.11`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.pythonclick
 * // Or access via domain
 * const samePkg = pantry.palletsprojectscomclick
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "python-click"
 * console.log(pkg.description) // "Python composable command line interface toolkit"
 * console.log(pkg.versions[0]) // "8.2.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/palletsprojects-com/click.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pythonclickPackage = {
  /**
   * The display name of this package.
   */
  name: 'python-click' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'palletsprojects.com/click' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Python composable command line interface toolkit' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/palletsprojects.com/click/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pallets/click' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install python-click' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org>=3.11',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '8.2.2',
    '8.2.1',
    '8.2.0',
    '8.1.8',
    '8.1.7',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +palletsprojects.com/click -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install python-click' as const,
}

export type PythonclickPackage = typeof pythonclickPackage
