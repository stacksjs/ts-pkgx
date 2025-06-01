/**
 * **psycopg.org** - Go home.
 *
 * @domain `psycopg.org`
 *
 * @install `pkgx psycopg.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.psycopgorg
 * console.log(pkg.name)        // "psycopg.org"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/psycopg-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const psycopgorgPackage = {
  /**
   * The display name of this package.
   */
  name: '' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Go home.' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/psycopg.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'psycopg.org' as const,
  fullPath: 'psycopg.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx psycopg.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type PsycopgorgPackage = typeof psycopgorgPackage
