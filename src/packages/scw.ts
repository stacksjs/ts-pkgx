/**
 * **scw** - Command Line Interface for Scaleway
 *
 * @domain `scaleway.com`
 * @programs `scw`
 * @version `2.40.0` (9 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) scw`
 * @name `scw`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.scw
 * // Or access via domain
 * const samePkg = pantry.scalewaycom
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "scw"
 * console.log(pkg.description) // "Command Line Interface for Scaleway"
 * console.log(pkg.programs)    // ["scw"]
 * console.log(pkg.versions[0]) // "2.40.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/scaleway-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const scwPackage = {
  /**
   * The display name of this package.
   */
  name: 'scw' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'scaleway.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Command Line Interface for Scaleway' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/scaleway.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) scw' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'scw',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.40.0',
    '2.39.0',
    '2.38.0',
    '2.37.0',
    '2.36.0',
    '2.35.0',
    '2.34.0',
    '2.33.0',
    '2.32.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'scaleway.com' as const,
}

export type ScwPackage = typeof scwPackage
