/**
 * **tabulate** - Pretty-print tabular data in Python, a library and a command-line utility. Repository migrated from bitbucket.org/astanin/python-tabulate.
 *
 * @domain `github.com/astanin/python-tabulate`
 * @programs `tabulate`
 * @version `0.9.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) tabulate`
 * @name `tabulate`
 * @aliases `astanin/python-tabulate`
 * @dependencies `pkgx.sh^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.tabulate
 * // Or access via domain
 * const samePkg = pantry.githubcomastaninpythontabulate
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "tabulate"
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
  name: 'tabulate' as const,
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
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) tabulate' as const,
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
    'astanin/python-tabulate',
  ] as const,
  fullPath: 'github.com/astanin/python-tabulate' as const,
}

export type TabulatePackage = typeof tabulatePackage
