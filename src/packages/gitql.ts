/**
 * **gitql** - GitQL is a extensible SQL-like query language and SDK to perform queries on various data sources such .git files with supports of most of SQL features such as grouping, ordering and aggregation and window functions and allow customization like user-defined types and functions
 *
 * @domain `amrdeveloper.github.io/GQL`
 * @programs `gitql`
 * @version `0.39.0` (33 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/amrdeveloper-github-io/GQL.md
 *
 * @install `sh <(curl https://pkgx.sh) gitql`
 * @name `gitql`
 * @aliases `GQL`
 * @dependencies `libgit2.org~1.7`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.gitql
 * // Or access via domain
 * const samePkg = pantry.amrdevelopergithubiogql
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "gitql"
 * console.log(pkg.description) // "GitQL is a extensible SQL-like query language a..."
 * console.log(pkg.programs)    // ["gitql"]
 * console.log(pkg.versions[0]) // "0.39.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/amrdeveloper-github-io/GQL.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gitqlPackage = {
  /**
   * The display name of this package.
   */
  name: 'gitql' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'amrdeveloper.github.io/GQL' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'GitQL is a extensible SQL-like query language and SDK to perform queries on various data sources such .git files with supports of most of SQL features such as grouping, ordering and aggregation and window functions and allow customization like user-defined types and functions' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/amrdeveloper.github.io/GQL/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) gitql' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'gitql',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'libgit2.org~1.7',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.39.0',
    '0.38.0',
    '0.37.0',
    '0.36.0',
    '0.35.0',
    '0.34.0',
    '0.33.0',
    '0.32.0',
    '0.31.0',
    '0.30.0',
    '0.29.1',
    '0.28.0',
    '0.27.0',
    '0.26.0',
    '0.25.0',
    '0.24.0',
    '0.23.0',
    '0.22.1',
    '0.22.0',
    '0.21.0',
    '0.20.0',
    '0.19.1',
    '0.19.0',
    '0.18.0',
    '0.17.0',
    '0.16.0',
    '0.15.0',
    '0.14.0',
    '0.13.0',
    '0.12.0',
    '0.11.0',
    '0.10.0',
    '0.9.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'GQL',
  ] as const,
  fullPath: 'amrdeveloper.github.io/GQL' as const,
}

export type GitqlPackage = typeof gitqlPackage
