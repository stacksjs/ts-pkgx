/**
 * **mc** - Unix like utilities for object store
 *
 * @domain `min.io/mc`
 * @programs `mc`
 * @version `2023.10.24.21.42.22` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) mc`
 * @name `mc`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.mc
 * // Or access via domain
 * const samePkg = pantry.miniomc
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "mc"
 * console.log(pkg.description) // "Unix like utilities for object store"
 * console.log(pkg.programs)    // ["mc"]
 * console.log(pkg.versions[0]) // "2023.10.24.21.42.22" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/min-io/mc.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mcPackage = {
  /**
   * The display name of this package.
   */
  name: 'mc' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'min.io/mc' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Unix like utilities for object store' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/min.io/mc/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) mc' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'mc',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2023.10.24.21.42.22',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'min.io/mc' as const,
}

export type McPackage = typeof mcPackage
