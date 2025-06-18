/**
 * **psycopg3** - New generation PostgreSQL database adapter for the Python programming language
 *
 * @domain `psycopg.org/psycopg3`
 * @version `3.2.9` (8 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +psycopg.org/psycopg3 -- $SHELL -i`
 * @aliases `psycopg3`
 * @dependencies `python.org~3.11`, `postgresql.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.psycopg3
 * // Or access via domain
 * const samePkg = pantry.psycopgorgpsycopg3
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "psycopg.org/psycopg3"
 * console.log(pkg.description) // "New generation PostgreSQL database adapter for ..."
 * console.log(pkg.versions[0]) // "3.2.9" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/psycopg-org/psycopg3.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const psycopg3Package = {
  /**
   * The display name of this package.
   */
  name: 'psycopg.org/psycopg3' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'psycopg.org/psycopg3' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'New generation PostgreSQL database adapter for the Python programming language' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/psycopg.org/psycopg3/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +psycopg.org/psycopg3 -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org~3.11',
    'postgresql.org',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.2.9',
    '3.2.8',
    '3.2.7',
    '3.2.6',
    '3.2.5',
    '3.2.4',
    '3.2.3',
    '3.2.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'psycopg3',
  ] as const,
  fullPath: 'psycopg.org/psycopg3' as const,
}

export type Psycopg3Package = typeof psycopg3Package
