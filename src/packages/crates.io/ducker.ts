/**
 * **ducker** - A slightly quackers Docker TUI based on k9s 🦆
 *
 * @domain `crates.io/ducker`
 * @programs `ducker`
 * @version `0.4.2` (5 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install ducker`
 * @name `ducker`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.ducker
 * // Or access via domain
 * const samePkg = pantry.cratesioducker
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "ducker"
 * console.log(pkg.description) // "A slightly quackers Docker TUI based on k9s 🦆"
 * console.log(pkg.programs)    // ["ducker"]
 * console.log(pkg.versions[0]) // "0.4.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/ducker.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const duckerPackage = {
  /**
   * The display name of this package.
   */
  name: 'ducker' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/ducker' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A slightly quackers Docker TUI based on k9s 🦆' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/ducker/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install ducker' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'ducker',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.4.2',
    '0.4.1',
    '0.4.0',
    '0.3.1',
    '0.3.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) ducker -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install ducker' as const,
}

export type DuckerPackage = typeof duckerPackage
