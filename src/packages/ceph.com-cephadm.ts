/**
 * **ceph.com-cephadm** - Go home.
 *
 * @domain `ceph.com-cephadm`
 *
 * @install `pkgx ceph.com-cephadm`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cephcomcephadm
 * console.log(pkg.name)        // "ceph.com-cephadm"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/ceph-com-cephadm.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cephcomcephadmPackage = {
  /**
   * The display name of this package.
   */
  name: '' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Go home.' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/ceph.com-cephadm/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'ceph.com-cephadm' as const,
  fullPath: 'ceph.com-cephadm' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx ceph.com-cephadm' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type CephcomcephadmPackage = typeof cephcomcephadmPackage
