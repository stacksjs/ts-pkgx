/**
 * **zookeeper** - Package from pantry: apache.org/zookeeper
 *
 * @domain `apache.org/zookeeper`
 *
 * @install `launchpad install apache.org/zookeeper`
 * @dependencies `openjdk.org`, `openssl.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.apacheorgzookeeper
 * console.log(pkg.name)        // "zookeeper"
 * console.log(pkg.description) // "Package from pantry: apache.org/zookeeper"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/apache-org/zookeeper.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const apacheorgzookeeperPackage = {
  /**
   * The display name of this package.
   */
  name: 'zookeeper' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'apache.org/zookeeper' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: apache.org/zookeeper' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install apache.org/zookeeper' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +apache.org/zookeeper -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install apache.org/zookeeper' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openjdk.org',
    'openssl.org',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/apache.org/zookeeper/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type ApacheorgzookeeperPackage = typeof apacheorgzookeeperPackage
