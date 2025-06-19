/**
 * **tabulate** - Pretty-print tabular data in Python, a library and a command-line utility. Repository migrated from bitbucket.org/astanin/python-tabulate.
 *
 * @domain `github.com/astanin/python-tabulate`
 * @programs `tabulate`
 * @version `0.9.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install tabulate`
 * @aliases `tabulate`
 * @dependencies `pkgx.sh^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.tabulate
 * // Or access via domain
 * const samePkg = pantry.githubcomastaninpythontabulate
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "python-tabulate"
 * console.log(pkg.description) // "Pretty-print tabular data in Python, a library ..."
 * console.log(pkg.programs)    // ["tabulate"]
 * console.log(pkg.versions[0]) // "0.9.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/astanin/python-tabulate.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const tabulatePackage = {
  /**
   * The display name of this package.
   */
  name: 'python-tabulate' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/astanin/python-tabulate' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Pretty-print tabular data in Python, a library and a command-line utility. Repository migrated from bitbucket.org/astanin/python-tabulate.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/astanin/python-tabulate/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/astanin/python-tabulate' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install tabulate' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'tabulate',
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
    '0.9.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'tabulate',
  ] as const,
}

export type TabulatePackage = typeof tabulatePackage
