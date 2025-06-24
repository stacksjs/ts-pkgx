/**
 * **glauth** - A lightweight LDAP server for development, home use, or CI
 *
 * @domain `github.com/glauth/glauth`
 * @programs `glauth`, `glauth-setup`
 * @version `2.4.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install glauth`
 * @name `glauth`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.glauth
 * // Or access via domain
 * const samePkg = pantry.githubcomglauthglauth
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "glauth"
 * console.log(pkg.description) // "A lightweight LDAP server for development, home..."
 * console.log(pkg.programs)    // ["glauth", "glauth-setup"]
 * console.log(pkg.versions[0]) // "2.4.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/glauth/glauth.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const glauthPackage = {
  /**
   * The display name of this package.
   */
  name: 'glauth' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/glauth/glauth' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A lightweight LDAP server for development, home use, or CI' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/glauth/glauth/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/glauth/glauth' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install glauth' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'glauth',
    'glauth-setup',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.4.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/glauth/glauth -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install glauth' as const,
}

export type GlauthPackage = typeof glauthPackage
