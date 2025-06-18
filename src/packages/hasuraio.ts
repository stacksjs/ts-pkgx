/**
 * **hasura** - Blazing fast, instant realtime GraphQL APIs on all your data with fine grained access control, also trigger webhooks on database events.
 *
 * @domain `hasura.io`
 * @programs `hasura`
 * @version `2.48.1` (51 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install hasura`
 * @aliases `hasura`
 * @dependencies `go.dev^1.16`, `npmjs.com^8.19.4`, `gnu.org/coreutils`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.hasura
 * // Or access via domain
 * const samePkg = pantry.hasuraio
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "hasura.io"
 * console.log(pkg.description) // "Blazing fast, instant realtime GraphQL APIs on ..."
 * console.log(pkg.programs)    // ["hasura"]
 * console.log(pkg.versions[0]) // "2.48.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/hasura-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const hasuraPackage = {
  /**
   * The display name of this package.
   */
  name: 'hasura.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'hasura.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Blazing fast, instant realtime GraphQL APIs on all your data with fine grained access control, also trigger webhooks on database events.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/hasura.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install hasura' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'hasura',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'go.dev^1.16',
    'npmjs.com^8.19.4',
    'gnu.org/coreutils',
    'nodejs.org^18  # fails with ^20',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.48.1',
    '2.48.0',
    '2.47.0',
    '2.46.0',
    '2.45.2',
    '2.45.1',
    '2.45.0',
    '2.44.1',
    '2.44.0',
    '2.43.0',
    '2.42.0',
    '2.41.0',
    '2.40.3',
    '2.40.2',
    '2.40.1',
    '2.40.0',
    '2.39.2',
    '2.39.1',
    '2.39.0',
    '2.38.1',
    '2.38.0',
    '2.37.1',
    '2.37.0',
    '2.36.12',
    '2.36.10',
    '2.36.9',
    '2.36.8',
    '2.36.7',
    '2.36.6',
    '2.36.5',
    '2.36.4',
    '2.36.3',
    '2.36.2',
    '2.36.1',
    '2.36.0',
    '2.35.2',
    '2.35.1',
    '2.35.0',
    '2.34.0',
    '2.33.4',
    '2.33.3',
    '2.33.2',
    '2.33.1',
    '2.33.0',
    '2.32.1',
    '2.32.0',
    '2.31.0',
    '2.11.13',
    '2.11.12',
    '2.11.11',
    '2.11.10',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'hasura',
  ] as const,
}

export type HasuraPackage = typeof hasuraPackage
