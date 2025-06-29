/**
 * **pwgen** - Password generator
 *
 * @domain `pwgen.sourceforge.io`
 * @programs `pwgen`
 * @version `2.8.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install pwgen`
 * @name `pwgen`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.pwgen
 * // Or access via domain
 * const samePkg = pantry.pwgensourceforgeio
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "pwgen"
 * console.log(pkg.description) // "Password generator"
 * console.log(pkg.programs)    // ["pwgen"]
 * console.log(pkg.versions[0]) // "2.8.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pwgen-sourceforge-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pwgenPackage = {
  /**
   * The display name of this package.
   */
  name: 'pwgen' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'pwgen.sourceforge.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Password generator' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/pwgen.sourceforge.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install pwgen' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'pwgen',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.8.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) pwgen -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install pwgen' as const,
}

export type PwgenPackage = typeof pwgenPackage
