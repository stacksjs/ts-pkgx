/**
 * **rover** - CLI for managing and maintaining data graphs with Apollo Studio
 *
 * @domain `apollographql.com/rover`
 * @programs `rover`
 * @version `0.33.0` (27 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install rover`
 * @name `rover`
 * @dependencies `openssl.org^1.1`, `zlib.net^1`, `libgit2.org~1.7 # links to libgit2.so.1.7`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.rover
 * // Or access via domain
 * const samePkg = pantry.apollographqlcomrover
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "rover"
 * console.log(pkg.description) // "CLI for managing and maintaining data graphs wi..."
 * console.log(pkg.programs)    // ["rover"]
 * console.log(pkg.versions[0]) // "0.33.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/apollographql-com/rover.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const roverPackage = {
  /**
   * The display name of this package.
   */
  name: 'rover' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'apollographql.com/rover' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'CLI for managing and maintaining data graphs with Apollo Studio' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/apollographql.com/rover/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install rover' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'rover',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org^1.1',
    'zlib.net^1',
    'libgit2.org~1.7 # links to libgit2.so.1.7',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.33.0',
    '0.32.1',
    '0.32.0',
    '0.31.2',
    '0.31.1',
    '0.31.0',
    '0.30.0',
    '0.29.1',
    '0.29.0',
    '0.28.1',
    '0.28.0',
    '0.27.2',
    '0.27.1',
    '0.27.0',
    '0.26.3',
    '0.26.2',
    '0.26.1',
    '0.26.0',
    '0.25.0',
    '0.24.0',
    '0.23.0',
    '0.22.0',
    '0.21.0',
    '0.20.0',
    '0.19.1',
    '0.19.0',
    '0.18.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type RoverPackage = typeof roverPackage
