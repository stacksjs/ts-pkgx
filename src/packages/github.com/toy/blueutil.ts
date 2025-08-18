/**
 * **blueutil** - CLI for bluetooth on OSX: power, discoverable state, list, inquire devices, connect, info, …
 *
 * @domain `github.com/toy/blueutil`
 * @programs `blueutil`
 * @version `2.13.0` (5 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install blueutil`
 * @name `blueutil`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.blueutil
 * // Or access via domain
 * const samePkg = pantry.githubcomtoyblueutil
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "blueutil"
 * console.log(pkg.description) // "CLI for bluetooth on OSX: power, discoverable s..."
 * console.log(pkg.programs)    // ["blueutil"]
 * console.log(pkg.versions[0]) // "2.13.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/toy/blueutil.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const blueutilPackage = {
  /**
   * The display name of this package.
   */
  name: 'blueutil' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/toy/blueutil' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'CLI for bluetooth on OSX: power, discoverable state, list, inquire devices, connect, info, …' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/toy/blueutil/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/toy/blueutil' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install blueutil' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'blueutil',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.13.0',
    '2.12.0',
    '2.11.0',
    '2.10.0',
    '2.9.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) blueutil -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install blueutil' as const,
}

export type BlueutilPackage = typeof blueutilPackage
