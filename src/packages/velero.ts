/**
 * **velero** - Backup and migrate Kubernetes applications and their persistent volumes
 *
 * @domain `velero.io`
 * @programs `velero`
 * @version `1.16.1` (1 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/velero-io.md
 *
 * @install `sh <(curl https://pkgx.sh) velero`
 * @name `velero`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.velero
 * // Or access via domain
 * const samePkg = pantry.veleroio
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "velero"
 * console.log(pkg.description) // "Backup and migrate Kubernetes applications and ..."
 * console.log(pkg.programs)    // ["velero"]
 * console.log(pkg.versions[0]) // "1.16.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/velero-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const veleroPackage = {
  /**
   * The display name of this package.
   */
  name: 'velero' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'velero.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Backup and migrate Kubernetes applications and their persistent volumes' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/velero.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) velero' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'velero',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.16.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'velero.io' as const,
}

export type VeleroPackage = typeof veleroPackage
