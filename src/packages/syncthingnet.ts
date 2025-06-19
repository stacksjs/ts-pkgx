/**
 * **syncthing** - Open source continuous file synchronization application
 *
 * @domain `syncthing.net`
 * @programs `syncthing`
 * @version `1.29.7` (19 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install syncthing`
 * @aliases `syncthing`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.syncthing
 * // Or access via domain
 * const samePkg = pantry.syncthingnet
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "syncthing.net"
 * console.log(pkg.description) // "Open source continuous file synchronization app..."
 * console.log(pkg.programs)    // ["syncthing"]
 * console.log(pkg.versions[0]) // "1.29.7" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/syncthing-net.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const syncthingPackage = {
  /**
   * The display name of this package.
   */
  name: 'syncthing.net' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'syncthing.net' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Open source continuous file synchronization application' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/syncthing.net/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install syncthing' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'syncthing',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.29.7',
    '1.29.6',
    '1.29.5',
    '1.29.4',
    '1.29.3',
    '1.29.2',
    '1.29.1',
    '1.29.0',
    '1.28.1',
    '1.28.0',
    '1.27.12',
    '1.27.11',
    '1.27.10',
    '1.27.9',
    '1.27.8',
    '1.27.7',
    '1.27.6',
    '1.27.5',
    '1.27.4',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'syncthing',
  ] as const,
}

export type SyncthingPackage = typeof syncthingPackage
