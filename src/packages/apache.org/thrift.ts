/**
 * **thrift** - Package from pantry: apache.org/thrift
 *
 * @domain `apache.org/thrift`
 *
 * @install `launchpad install apache.org/thrift`
 * @dependencies `openssl.org@1.1`, `zlib.net`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.apacheorgthrift
 * console.log(pkg.name)        // "thrift"
 * console.log(pkg.description) // "Package from pantry: apache.org/thrift"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/apache-org/thrift.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const apacheorgthriftPackage = {
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
  description: 'Package from pantry: apache.org/thrift' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install apache.org/thrift' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +apache.org/thrift -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install apache.org/thrift' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org@1.1',
    'zlib.net',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/apache.org/thrift/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type ApacheorgthriftPackage = typeof apacheorgthriftPackage
