/**
 * **jenv** - Manage your Java environment
 *
 * @domain `jenv.be`
 * @programs `jenv`
 * @version `0.5.7` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install jenv`
 * @aliases `jenv`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.jenv
 * // Or access via domain
 * const samePkg = pantry.jenvbe
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "jenv.be"
 * console.log(pkg.description) // "Manage your Java environment"
 * console.log(pkg.programs)    // ["jenv"]
 * console.log(pkg.versions[0]) // "0.5.7" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/jenv-be.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const jenvPackage = {
  /**
   * The display name of this package.
   */
  name: 'jenv.be' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'jenv.be' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Manage your Java environment' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/jenv.be/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install jenv' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'jenv',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.5.7',
    '0.5.6',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'jenv',
  ] as const,
}

export type JenvPackage = typeof jenvPackage
