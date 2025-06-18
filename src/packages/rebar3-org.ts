/**
 * **rebar3** - Erlang build tool that makes it easy to compile and test Erlang applications and releases.
 *
 * @domain `rebar3.org`
 * @programs `rebar3`
 * @version `3.25.0` (3 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) rebar3`
 * @name `rebar3`
 * @dependencies `erlang.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.rebar3
 * // Or access via domain
 * const samePkg = pantry.rebar3org
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "rebar3"
 * console.log(pkg.description) // "Erlang build tool that makes it easy to compile..."
 * console.log(pkg.programs)    // ["rebar3"]
 * console.log(pkg.versions[0]) // "3.25.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/rebar3-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const rebar3Package = {
  /**
   * The display name of this package.
   */
  name: 'rebar3' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'rebar3.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Erlang build tool that makes it easy to compile and test Erlang applications and releases.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/rebar3.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) rebar3' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'rebar3',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'erlang.org',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.25.0',
    '3.24.0',
    '3.23.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'rebar3.org' as const,
}

export type Rebar3Package = typeof rebar3Package
