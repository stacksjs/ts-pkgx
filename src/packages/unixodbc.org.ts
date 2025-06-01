/**
 * **+unixodbc.org -- $SHELL -i** - The unixODBC Project goals are to develop and promote unixODBC to be the definitive standard for ODBC on non MS Windows platforms.
 *
 * @domain `unixodbc.org`
 * @programs `dltest`, `isql`, `iusql`, `odbc_config`, `odbcinst`, ... (+1 more)
 * @version `2.3.12` (2 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/unixodbc-org.md
 *
 * @install `sh <(curl https://pkgx.sh) +unixodbc.org -- $SHELL -i`
 * @aliases `+unixodbc.org -- $SHELL -i`
 * @dependencies `gnu.org/libtool`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.unixodbcorgSHELLi
 * // Or access via domain
 * const samePkg = pantry.unixodbcorg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "unixodbc.org"
 * console.log(pkg.description) // "The unixODBC Project goals are to develop and p..."
 * console.log(pkg.programs)    // ["dltest", "isql", ...]
 * console.log(pkg.versions[0]) // "2.3.12" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/unixodbc-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const unixodbcorgSHELLiPackage = {
  /**
   * The display name of this package.
   */
  name: 'unixodbc.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'unixodbc.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'The unixODBC Project goals are to develop and promote unixODBC to be the definitive standard for ODBC on non MS Windows platforms.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/unixodbc.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +unixodbc.org -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'dltest',
    'isql',
    'iusql',
    'odbc_config',
    'odbcinst',
    'slencheck',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnu.org/libtool',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.3.12',
    '2.3.11',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    '+unixodbc.org -- $SHELL -i',
  ] as const,
  fullPath: 'unixodbc.org' as const,
}

export type UnixodbcorgSHELLiPackage = typeof unixodbcorgSHELLiPackage
