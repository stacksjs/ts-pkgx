/**
 * **flywaydb.org** - Package from pantry: flywaydb.org
 *
 * @domain `flywaydb.org`
 *
 * @install `launchpad install flywaydb.org`
 * @dependencies `openjdk.org^21`, `curl.se`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.flywaydborg
 * console.log(pkg.name)        // "flywaydb.org"
 * console.log(pkg.description) // "Package from pantry: flywaydb.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/flywaydb-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const flywaydborgPackage = {
  /**
   * The display name of this package.
   */
  name: 'flywaydb.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'flywaydb.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: flywaydb.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install flywaydb.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openjdk.org^21',
    'curl.se',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/flywaydb.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type FlywaydborgPackage = typeof flywaydborgPackage
