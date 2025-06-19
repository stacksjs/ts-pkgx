/**
 * **sccache** - Sccache is a ccache-like tool. It is used as a compiler wrapper and avoids compilation when possible. Sccache has the capability to utilize caching in remote storage environments, including various cloud storage options, or alternatively, in local storage.
 *
 * @domain `crates.io/sccache`
 * @programs `sccache`
 * @version `0.10.0` (5 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install sccache`
 * @name `sccache`
 * @dependencies `openssl.org^1.1`, `curl.se/ca-certs`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.sccache
 * // Or access via domain
 * const samePkg = pantry.cratesiosccache
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "sccache"
 * console.log(pkg.description) // "Sccache is a ccache-like tool. It is used as a ..."
 * console.log(pkg.programs)    // ["sccache"]
 * console.log(pkg.versions[0]) // "0.10.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/sccache.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const sccachePackage = {
  /**
   * The display name of this package.
   */
  name: 'sccache' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/sccache' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Sccache is a ccache-like tool. It is used as a compiler wrapper and avoids compilation when possible. Sccache has the capability to utilize caching in remote storage environments, including various cloud storage options, or alternatively, in local storage.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/sccache/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install sccache' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'sccache',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org^1.1',
    'curl.se/ca-certs',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.10.0',
    '0.9.1',
    '0.9.0',
    '0.8.2',
    '0.8.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type SccachePackage = typeof sccachePackage
