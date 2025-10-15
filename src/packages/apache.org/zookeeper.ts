/**
 * **zookeeper** - pkgx package
 *
 * @domain `apache.org/zookeeper`
 * @programs `zkCleanup`, `zkCli`, `zkEnv`, `zkServer-initialize`, `zkServer`, ... (+4 more)
 * @version `3.9.4` (4 versions available)
 * @versions From newest version to oldest.
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
 * console.log(pkg.programs)    // ["zkCleanup", "zkCli", ...]
 * console.log(pkg.versions[0]) // "3.9.4" (latest)
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
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/apache.org/zookeeper/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install apache.org/zookeeper' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +apache.org/zookeeper -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install apache.org/zookeeper' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'zkCleanup',
    'zkCli',
    'zkEnv',
    'zkServer-initialize',
    'zkServer',
    'zkSnapshotComparer',
    'zkSnapshotRecursiveSummaryToolkit',
    'zkSnapShotToolkit',
    'zkTxnLogToolkit',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openjdk.org',
    'openssl.org',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.9.4',
    '3.9.3',
    '3.9.2',
    '3.9.1',
  ] as const,
  aliases: [] as const,
}

export type ApacheorgzookeeperPackage = typeof apacheorgzookeeperPackage
