/**
 * **etcd** - Distributed reliable key-value store for the most critical data of a distributed system
 *
 * @domain `etcd.io`
 * @programs `etcd`, `etcdctl`
 * @version `3.6.1` (12 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +etcd.io -- $SHELL -i`
 * @aliases `etcd`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.etcd
 * // Or access via domain
 * const samePkg = pantry.etcdio
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "etcd.io"
 * console.log(pkg.description) // "Distributed reliable key-value store for the mo..."
 * console.log(pkg.programs)    // ["etcd", "etcdctl"]
 * console.log(pkg.versions[0]) // "3.6.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/etcd-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const etcdPackage = {
  /**
   * The display name of this package.
   */
  name: 'etcd.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'etcd.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Distributed reliable key-value store for the most critical data of a distributed system' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/etcd.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install +etcd.io -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'etcd',
    'etcdctl',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.6.1',
    '3.6.0',
    '3.5.21',
    '3.5.20',
    '3.5.19',
    '3.5.18',
    '3.5.17',
    '3.5.16',
    '3.5.15',
    '3.5.14',
    '3.4.37',
    '3.4.36',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'etcd',
  ] as const,
}

export type EtcdPackage = typeof etcdPackage
