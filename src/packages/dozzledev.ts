/**
 * **dozzle** - Realtime log viewer for docker containers.
 *
 * @domain `dozzle.dev`
 * @programs `dozzle`
 * @version `8.13.14` (73 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install dozzle`
 * @name `dozzle`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.dozzle
 * // Or access via domain
 * const samePkg = pantry.dozzledev
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "dozzle"
 * console.log(pkg.description) // "Realtime log viewer for docker containers."
 * console.log(pkg.programs)    // ["dozzle"]
 * console.log(pkg.versions[0]) // "8.13.14" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/dozzle-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const dozzlePackage = {
  /**
   * The display name of this package.
   */
  name: 'dozzle' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'dozzle.dev' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Realtime log viewer for docker containers.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/dozzle.dev/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install dozzle' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'dozzle',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '8.13.14',
    '8.13.13',
    '8.13.12',
    '8.13.11',
    '8.13.10',
    '8.13.9',
    '8.13.8',
    '8.13.7',
    '8.13.6',
    '8.13.5',
    '8.13.4',
    '8.13.3',
    '8.13.2',
    '8.13.1',
    '8.13.0',
    '8.12.21',
    '8.12.20',
    '8.12.19',
    '8.12.18',
    '8.12.17',
    '8.12.16',
    '8.12.15',
    '8.12.14',
    '8.12.13',
    '8.12.12',
    '8.12.11',
    '8.12.10',
    '8.12.9',
    '8.12.8',
    '8.12.7',
    '8.12.6',
    '8.12.5',
    '8.12.4',
    '8.12.3',
    '8.12.2',
    '8.12.1',
    '8.12.0',
    '8.11.9',
    '8.11.8',
    '8.11.7',
    '8.11.6',
    '8.11.5',
    '8.11.4',
    '8.11.3',
    '8.11.2',
    '8.11.1',
    '8.11.0',
    '8.10.7',
    '8.10.6',
    '8.10.5',
    '8.10.4',
    '8.10.3',
    '8.10.2',
    '8.10.1',
    '8.10.0',
    '8.9.1',
    '8.9.0',
    '8.8.3',
    '8.8.2',
    '8.8.1',
    '8.8.0',
    '8.7.4',
    '8.7.3',
    '8.7.2',
    '8.7.1',
    '8.7.0',
    '8.6.2',
    '8.6.1',
    '8.6.0',
    '8.5.5',
    '8.5.4',
    '8.5.3',
    '8.5.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) dozzle -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install dozzle' as const,
}

export type DozzlePackage = typeof dozzlePackage
