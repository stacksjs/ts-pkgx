/**
 * **sqlfluff** - A modular SQL linter and auto-formatter with support for multiple dialects and templated code.
 *
 * @domain `sqlfluff.com`
 * @programs `sqlfluff`
 * @version `3.4.1` (24 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install sqlfluff`
 * @name `sqlfluff`
 * @dependencies `python.org>=3.7<3.12`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.sqlfluff
 * // Or access via domain
 * const samePkg = pantry.sqlfluffcom
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "sqlfluff"
 * console.log(pkg.description) // "A modular SQL linter and auto-formatter with su..."
 * console.log(pkg.programs)    // ["sqlfluff"]
 * console.log(pkg.versions[0]) // "3.4.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/sqlfluff-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const sqlfluffPackage = {
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
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install sqlfluff' as const,
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
    '3.4.1',
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
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) sqlfluff -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install sqlfluff' as const,
}

export type SqlfluffPackage = typeof sqlfluffPackage
