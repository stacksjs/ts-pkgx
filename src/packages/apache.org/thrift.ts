/**
 * **thrift** - Framework for scalable cross-language services development
 *
 * @domain `apache.org/thrift`
 * @programs `thrift`
 * @version `0.22.0` (5 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install thrift`
 * @name `thrift`
 * @dependencies `openssl.org@1.1`, `zlib.net`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.thrift
 * // Or access via domain
 * const samePkg = pantry.apacheorgthrift
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "thrift"
 * console.log(pkg.description) // "Framework for scalable cross-language services ..."
 * console.log(pkg.programs)    // ["thrift"]
 * console.log(pkg.versions[0]) // "0.22.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/apache-org/thrift.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const thriftPackage = {
  /**
   * The display name of this package.
   */
  name: 'thrift' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'apache.org/thrift' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Framework for scalable cross-language services development' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/apache.org/thrift/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install thrift' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'thrift',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org@1.1',
    'zlib.net',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.22.0',
    '0.21.0',
    '0.20.0',
    '0.19.0',
    '0.18.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type ThriftPackage = typeof thriftPackage
