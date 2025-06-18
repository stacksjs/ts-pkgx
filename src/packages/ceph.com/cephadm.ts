/**
 * **cephadm** - Ceph is a distributed object, block, and file storage platform
 *
 * @domain `ceph.com/cephadm`
 * @programs `cephadm`
 * @version `20.3.0` (8 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install cephadm`
 * @name `cephadm`
 * @dependencies `openssl.org^1.1`, `python.org^3`, `python.org^3`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.cephadm
 * // Or access via domain
 * const samePkg = pantry.cephcomcephadm
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "cephadm"
 * console.log(pkg.description) // "Ceph is a distributed object, block, and file s..."
 * console.log(pkg.programs)    // ["cephadm"]
 * console.log(pkg.versions[0]) // "20.3.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/ceph-com/cephadm.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cephadmPackage = {
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
  description: 'Ceph is a distributed object, block, and file storage platform' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/ceph.com/cephadm/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install cephadm' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'cephadm',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org^1.1',
    'python.org^3',
    'python.org^3',
    'gnu.org/coreutils',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '20.3.0',
    '20.0.0',
    '19.3.0',
    '19.2.2',
    '19.2.1',
    '18.2.7',
    '18.2.6',
    '18.2.5',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type CephadmPackage = typeof cephadmPackage
