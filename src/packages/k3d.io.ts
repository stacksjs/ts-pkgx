/**
 * **k3d** - Little helper to run CNCF's k3s in Docker
 *
 * @domain `k3d.io`
 * @programs `k3d`
 * @version `5.8.3` (17 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/k3d-io.md
 * @install `sh <(curl https://pkgx.sh) k3d`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.k3dio
 * console.log(pkg.name)        // "k3d"
 * console.log(pkg.description) // "Little helper to run CNCF's k3s in Docker"
 * console.log(pkg.programs)    // ["k3d"]
 * console.log(pkg.versions[0]) // "5.8.3" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/k3d-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const k3dioPackage = {
  /**
   * The display name of this package.
   */
  name: 'k3d' as const,
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
  installCommand: 'sh <(curl https://pkgx.sh) k3d' as const,
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
  fullPath: 'k3d.io' as const,
  aliases: [] as const,
}

export type K3dioPackage = typeof k3dioPackage
