/**
 * **python-click** - Python composable command line interface toolkit
 *
 * @domain `palletsprojects.com/click`
 * @version `8.2.1` (4 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +palletsprojects.com/click -- $SHELL -i`
 * @aliases `python-click`
 * @dependencies `python.org>=3.11`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.pythonclick
 * // Or access via domain
 * const samePkg = pantry.palletsprojectscomclick
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "click"
 * console.log(pkg.description) // "Python composable command line interface toolkit"
 * console.log(pkg.versions[0]) // "8.2.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/palletsprojects-com/click.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pythonclickPackage = {
  /**
   * The display name of this package.
   */
  name: 'click' as const,
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
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +palletsprojects.com/click -- $SHELL -i' as const,
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
    '8.2.1',
    '8.2.0',
    '8.1.8',
    '8.1.7',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'python-click',
  ] as const,
}

export type PythonclickPackage = typeof pythonclickPackage
