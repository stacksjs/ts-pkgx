/**
 * **license-plist** - A license list generator of all your dependencies for iOS applications
 *
 * @domain `github.com/mono0926/LicensePlist`
 * @programs `license-plist`
 * @version `3.27.1` (4 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install license-plist`
 * @name `license-plist`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.licenseplist
 * // Or access via domain
 * const samePkg = pantry.githubcommono0926licenseplist
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "license-plist"
 * console.log(pkg.description) // "A license list generator of all your dependenci..."
 * console.log(pkg.programs)    // ["license-plist"]
 * console.log(pkg.versions[0]) // "3.27.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/mono0926/LicensePlist.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const licenseplistPackage = {
  /**
   * The display name of this package.
   */
  name: 'license-plist' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/mono0926/LicensePlist' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A license list generator of all your dependencies for iOS applications' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/mono0926/LicensePlist/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install license-plist' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'license-plist',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.27.1',
    '3.27.0',
    '3.26.0',
    '3.25.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) license-plist -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install license-plist' as const,
}

export type LicenseplistPackage = typeof licenseplistPackage
