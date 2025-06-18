/**
 * **unixodbc.org** - Package from pantry: unixodbc.org
 *
 * @domain `unixodbc.org`
 *
 * @install `launchpad install unixodbc.org`
 * @dependencies `gnu.org/libtool`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.unixodbcorg
 * console.log(pkg.name)        // "unixodbc.org"
 * console.log(pkg.description) // "Package from pantry: unixodbc.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/unixodbc-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const unixodbcorgPackage = {
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
  description: 'Package from pantry: unixodbc.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install unixodbc.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnu.org/libtool',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/unixodbc.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type UnixodbcorgPackage = typeof unixodbcorgPackage
