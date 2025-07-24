/**
 * **etcd.io** - Package from pantry: etcd.io
 *
 * @domain `etcd.io`
 *
 * @install `launchpad install etcd.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.etcdio
 * console.log(pkg.name)        // "etcd.io"
 * console.log(pkg.description) // "Package from pantry: etcd.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/etcd-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const etcdioPackage = {
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
  description: 'Package from pantry: etcd.io' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install etcd.io' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +etcd.io -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install etcd.io' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/etcd.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type EtcdioPackage = typeof etcdioPackage
