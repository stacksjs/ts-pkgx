/**
 * **rmz** - Modern, performance focused unix commands
 *
 * @domain `crates.io/rmz`
 * @programs `rmz`
 * @version `3.1.0` (5 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install rmz`
 * @name `rmz`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.rmz
 * // Or access via domain
 * const samePkg = pantry.cratesiormz
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "rmz"
 * console.log(pkg.description) // "Modern, performance focused unix commands"
 * console.log(pkg.programs)    // ["rmz"]
 * console.log(pkg.versions[0]) // "3.1.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/rmz.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const rmzPackage = {
  /**
   * The display name of this package.
   */
  name: 'rmz' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/rmz' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Modern, performance focused unix commands' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/rmz/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install rmz' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'rmz',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.1.0',
    '3.0.1',
    '3.0.0',
    '2.2.0',
    '2.1.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) rmz -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install rmz' as const,
}

export type RmzPackage = typeof rmzPackage
