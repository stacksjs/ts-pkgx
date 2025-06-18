/**
 * **kaspa** - Kaspa full-node reference implementation and related libraries in the Rust programming language
 *
 * @domain `github.com/kaspanet/rusty-kaspa`
 * @programs `kaspad`, `kaspa-cli`
 * @version `1.0.0` (15 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +github.com/kaspanet/rusty-kaspa -- $SHELL -i`
 * @aliases `kaspa`
 * @dependencies `openssl.org^1.1`, `rust-lang.org>=1.56`, `rust-lang.org/cargo`, ... (+2 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.kaspa
 * // Or access via domain
 * const samePkg = pantry.githubcomkaspanetrustykaspa
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "rusty-kaspa"
 * console.log(pkg.description) // "Kaspa full-node reference implementation and re..."
 * console.log(pkg.programs)    // ["kaspad", "kaspa-cli"]
 * console.log(pkg.versions[0]) // "1.0.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/kaspanet/rusty-kaspa.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const kaspaPackage = {
  /**
   * The display name of this package.
   */
  name: 'rusty-kaspa' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/kaspanet/rusty-kaspa' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Kaspa full-node reference implementation and related libraries in the Rust programming language' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/kaspanet/rusty-kaspa/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +github.com/kaspanet/rusty-kaspa -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'kaspad',
    'kaspa-cli',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org^1.1',
    'rust-lang.org>=1.56',
    'rust-lang.org/cargo',
    'protobuf.dev',
    'curl.se',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.0.0',
    '0.17.2',
    '0.17.1',
    '0.17.0',
    '0.16.1',
    '0.16.0',
    '0.15.2',
    '0.15.1',
    '0.14.1',
    '0.13.6',
    '0.13.4',
    '0.13.3',
    '0.13.2',
    '0.13.0',
    '0.1.7',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'kaspa',
  ] as const,
}

export type KaspaPackage = typeof kaspaPackage
