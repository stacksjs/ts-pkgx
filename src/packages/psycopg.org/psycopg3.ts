/**
 * **psycopg3** - Package from pantry: psycopg.org/psycopg3
 *
 * @domain `psycopg.org/psycopg3`
 *
 * @install `launchpad install psycopg.org/psycopg3`
 * @dependencies `python.org~3.11`, `postgresql.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.psycopgorgpsycopg3
 * console.log(pkg.name)        // "psycopg3"
 * console.log(pkg.description) // "Package from pantry: psycopg.org/psycopg3"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/psycopg-org/psycopg3.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const psycopgorgpsycopg3Package = {
  /**
   * The display name of this package.
   */
  name: 'psycopg3' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'psycopg.org/psycopg3' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: psycopg.org/psycopg3' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install psycopg.org/psycopg3' as const,
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
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/psycopg.org/psycopg3/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Psycopgorgpsycopg3Package = typeof psycopgorgpsycopg3Package
