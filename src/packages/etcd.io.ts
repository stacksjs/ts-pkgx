/**
 * **etcd** - Crafters of fine Open Source products
 *
 * @domain `etcd.io`
 *
 * @install `pkgx etcd.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.etcdio
 * console.log(pkg.name)        // "etcd"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/etcd-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const etcdioPackage = {
  /**
   * The display name of this package.
   */
  name: 'etcd' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/etcd.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'etcd.io' as const,
  fullPath: 'etcd.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx etcd.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type EtcdioPackage = typeof etcdioPackage
