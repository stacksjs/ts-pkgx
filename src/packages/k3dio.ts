/**
 * **k3d** - Little helper to run CNCF's k3s in Docker
 *
 * @domain `k3d.io`
 * @programs `k3d`
 * @version `5.8.3` (17 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install k3d`
 * @aliases `k3d`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.k3d
 * // Or access via domain
 * const samePkg = pantry.k3dio
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "k3d.io"
 * console.log(pkg.description) // "Little helper to run CNCF's k3s in Docker"
 * console.log(pkg.programs)    // ["k3d"]
 * console.log(pkg.versions[0]) // "5.8.3" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/k3d-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const k3dPackage = {
  /**
   * The display name of this package.
   */
  name: 'k3d.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'k3d.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Little helper to run CNCF\'s k3s in Docker' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/k3d.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install k3d' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'k3d',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '5.8.3',
    '5.8.2',
    '5.8.1',
    '5.8.0',
    '5.7.5',
    '5.7.4',
    '5.7.3',
    '5.7.2',
    '5.7.1',
    '5.7.0',
    '5.6.3',
    '5.6.2',
    '5.6.0',
    '5.5.2',
    '5.5.1',
    '5.5.0',
    '5.4.9',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'k3d',
  ] as const,
}

export type K3dPackage = typeof k3dPackage
