/**
 * **ceph.com** - Go home.
 *
 * @domain `ceph.com`
 *
 * @install `pkgx ceph.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cephcom
 * console.log(pkg.name)        // "ceph.com"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/ceph-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cephcomPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/ceph.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'ceph.com' as const,
  fullPath: 'ceph.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx ceph.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type CephcomPackage = typeof cephcomPackage
