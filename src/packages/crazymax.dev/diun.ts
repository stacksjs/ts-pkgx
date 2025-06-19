/**
 * **diun** - Receive notifications when an image is updated on a Docker registry
 *
 * @domain `crazymax.dev/diun`
 * @programs `diun`
 * @version `4.29.0` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install diun`
 * @name `diun`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.diun
 * // Or access via domain
 * const samePkg = pantry.crazymaxdevdiun
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "diun"
 * console.log(pkg.description) // "Receive notifications when an image is updated ..."
 * console.log(pkg.programs)    // ["diun"]
 * console.log(pkg.versions[0]) // "4.29.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crazymax-dev/diun.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const diunPackage = {
  /**
   * The display name of this package.
   */
  name: 'diun' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crazymax.dev/diun' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Receive notifications when an image is updated on a Docker registry' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crazymax.dev/diun/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install diun' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'diun',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '4.29.0',
    '4.28.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type DiunPackage = typeof diunPackage
