/**
 * **usql** - Universal command-line interface for SQL databases
 *
 * @domain `github.com/xo/usql`
 * @programs `usql`
 * @version `0.19.24` (26 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install usql`
 * @name `usql`
 * @dependencies `go.dev^1.21`, `crates.io/sd`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.usql
 * // Or access via domain
 * const samePkg = pantry.githubcomxousql
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "usql"
 * console.log(pkg.description) // "Universal command-line interface for SQL databases"
 * console.log(pkg.programs)    // ["usql"]
 * console.log(pkg.versions[0]) // "0.19.24" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/xo/usql.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const usqlPackage = {
  /**
   * The display name of this package.
   */
  name: 'usql' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/xo/usql' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Universal command-line interface for SQL databases' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/xo/usql/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install usql' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'usql',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'go.dev^1.21',
    'crates.io/sd',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.19.24',
    '0.19.23',
    '0.19.21',
    '0.19.20',
    '0.19.19',
    '0.19.18',
    '0.19.17',
    '0.19.16',
    '0.19.15',
    '0.19.14',
    '0.19.12',
    '0.19.11',
    '0.19.4',
    '0.19.3',
    '0.19.2',
    '0.19.1',
    '0.19.0',
    '0.18.1',
    '0.18.0',
    '0.17.5',
    '0.17.4',
    '0.17.2',
    '0.17.1',
    '0.17.0',
    '0.16.1',
    '0.16.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type UsqlPackage = typeof usqlPackage
