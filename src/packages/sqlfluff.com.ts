/**
 * **sqlfluff** - A modular SQL linter and auto-formatter with support for multiple dialects and templated code.
 *
 * @domain `sqlfluff.com`
 * @programs `sqlfluff`
 * @version `3.4.0` (23 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/sqlfluff-com.md
 * @install `sh <(curl https://pkgx.sh) sqlfluff`
 * @dependencies `python.org>=3.7<3.12`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.sqlfluffcom
 * console.log(pkg.name)        // "sqlfluff"
 * console.log(pkg.description) // "A modular SQL linter and auto-formatter with su..."
 * console.log(pkg.programs)    // ["sqlfluff"]
 * console.log(pkg.versions[0]) // "3.4.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/sqlfluff-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const sqlfluffcomPackage = {
  /**
   * The display name of this package.
   */
  name: 'sqlfluff' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'sqlfluff.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A modular SQL linter and auto-formatter with support for multiple dialects and templated code.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/sqlfluff.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) sqlfluff' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'sqlfluff',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org>=3.7<3.12',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.4.0',
    '3.3.1',
    '3.3.0',
    '3.2.5',
    '3.2.4',
    '3.2.3',
    '3.2.2',
    '3.2.1',
    '3.2.0',
    '3.1.1',
    '3.1.0',
    '3.0.7',
    '3.0.6',
    '3.0.5',
    '3.0.4',
    '3.0.3',
    '3.0.2',
    '3.0.1',
    '3.0.0',
    '2.3.5',
    '2.3.4',
    '2.3.3',
    '2.3.2',
  ] as const,
  fullPath: 'sqlfluff.com' as const,
  aliases: [] as const,
}

export type SqlfluffcomPackage = typeof sqlfluffcomPackage
