/**
 * **license** - Command line license text generator.
 *
 * @domain `github.com/nishanths/license`
 * @programs `license`
 * @version `5.0.4` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install license`
 * @name `license`
 * @dependencies `go.dev^1.16`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.license
 * // Or access via domain
 * const samePkg = pantry.githubcomnishanthslicense
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "license"
 * console.log(pkg.description) // "Command line license text generator."
 * console.log(pkg.programs)    // ["license"]
 * console.log(pkg.versions[0]) // "5.0.4" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/nishanths/license.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const licensePackage = {
  /**
   * The display name of this package.
   */
  name: 'license' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/nishanths/license' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Command line license text generator.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/nishanths/license/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install license' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'license',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'go.dev^1.16',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '5.0.4',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type LicensePackage = typeof licensePackage
