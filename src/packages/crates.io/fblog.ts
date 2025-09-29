/**
 * **fblog** - Small command-line JSON Log viewer
 *
 * @domain `crates.io/fblog`
 * @programs `fblog`
 * @version `4.16.0` (14 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install fblog`
 * @name `fblog`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.fblog
 * // Or access via domain
 * const samePkg = pantry.cratesiofblog
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "fblog"
 * console.log(pkg.description) // "Small command-line JSON Log viewer"
 * console.log(pkg.programs)    // ["fblog"]
 * console.log(pkg.versions[0]) // "4.16.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/fblog.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const fblogPackage = {
  /**
   * The display name of this package.
   */
  name: 'fblog' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/fblog' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Small command-line JSON Log viewer' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/fblog/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install fblog' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'fblog',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '4.16.0',
    '4.15.0',
    '4.14.0',
    '4.13.1',
    '4.13.0',
    '4.12.0',
    '4.11.0',
    '4.10.0',
    '4.9.0',
    '4.8.0',
    '4.7.0',
    '4.6.0',
    '4.5.0',
    '4.4.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) fblog -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install fblog' as const,
}

export type FblogPackage = typeof fblogPackage
