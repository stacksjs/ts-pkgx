/**
 * **cephadm** - Package from pantry: ceph.com/cephadm
 *
 * @domain `ceph.com/cephadm`
 *
 * @install `launchpad install ceph.com/cephadm`
 * @dependencies `openssl.org^1.1`, `python.org^3`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cephcomcephadm
 * console.log(pkg.name)        // "cephadm"
 * console.log(pkg.description) // "Package from pantry: ceph.com/cephadm"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/ceph-com/cephadm.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cephcomcephadmPackage = {
  /**
   * The display name of this package.
   */
  name: 'cephadm' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'ceph.com/cephadm' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: ceph.com/cephadm' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install ceph.com/cephadm' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +ceph.com/cephadm -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install ceph.com/cephadm' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org^1.1',
    'python.org^3',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/ceph.com/cephadm/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CephcomcephadmPackage = typeof cephcomcephadmPackage
