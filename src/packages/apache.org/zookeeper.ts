/**
 * **zookeeper** - pkgx package
 *
 * @domain `apache.org/zookeeper`
 * @programs `zkCleanup`, `zkCli`, `zkEnv`, `zkServer-initialize`, `zkServer`, ... (+4 more)
 * @version `3.9.3` (3 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +apache.org/zookeeper -- $SHELL -i`
 * @aliases `zookeeper`
 * @dependencies `openjdk.org`, `openssl.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.zookeeper
 * // Or access via domain
 * const samePkg = pantry.apacheorgzookeeper
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "apache.org/zookeeper"
 * console.log(pkg.programs)    // ["zkCleanup", "zkCli", ...]
 * console.log(pkg.versions[0]) // "3.9.3" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/apache-org/zookeeper.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const zookeeperPackage = {
  /**
   * The display name of this package.
   */
  name: 'apache.org/zookeeper' as const,
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
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +apache.org/zookeeper -- $SHELL -i' as const,
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
    '3.9.3',
    '3.9.2',
    '3.9.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'zookeeper',
  ] as const,
  fullPath: 'apache.org/zookeeper' as const,
}

export type ZookeeperPackage = typeof zookeeperPackage
