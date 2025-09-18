/**
 * **depot** - 🖥️ Depot CLI, build your Docker images in the cloud
 *
 * @domain `depot.dev`
 * @programs `depot`
 * @version `2.100.8` (68 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install depot`
 * @name `depot`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.depot
 * // Or access via domain
 * const samePkg = pantry.depotdev
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "depot"
 * console.log(pkg.description) // "🖥️ Depot CLI, build your Docker images in the ..."
 * console.log(pkg.programs)    // ["depot"]
 * console.log(pkg.versions[0]) // "2.100.8" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/depot-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const depotPackage = {
  /**
   * The display name of this package.
   */
  name: 'depot' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'depot.dev' as const,
  /**
   * Brief description of what this package does.
   */
  description: '🖥️ Depot CLI, build your Docker images in the cloud' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/depot.dev/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install depot' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'depot',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.100.8',
    '2.100.7',
    '2.100.6',
    '2.100.5',
    '2.100.4',
    '2.100.3',
    '2.100.2',
    '2.100.1',
    '2.100.0',
    '2.99.1',
    '2.99.0',
    '2.98.1',
    '2.98.0',
    '2.97.1',
    '2.97.0',
    '2.96.2',
    '2.96.1',
    '2.96.0',
    '2.95.1',
    '2.95.0',
    '2.94.0',
    '2.93.0',
    '2.92.0',
    '2.91.0',
    '2.90.0',
    '2.89.0',
    '2.88.0',
    '2.87.0',
    '2.86.0',
    '2.85.6',
    '2.85.5',
    '2.85.4',
    '2.85.3',
    '2.85.2',
    '2.85.1',
    '2.85.0',
    '2.84.4',
    '2.84.3',
    '2.84.2',
    '2.84.1',
    '2.84.0',
    '2.83.3',
    '2.83.2',
    '2.83.1',
    '2.83.0',
    '2.82.4',
    '2.82.3',
    '2.82.2',
    '2.82.1',
    '2.82.0',
    '2.81.0',
    '2.80.1',
    '2.80.0',
    '2.79.0',
    '2.78.0',
    '2.77.0',
    '2.76.3',
    '2.76.2',
    '2.76.1',
    '2.76.0',
    '2.75.0',
    '2.74.0',
    '2.73.1',
    '2.73.0',
    '2.72.0',
    '2.71.0',
    '2.70.0',
    '2.68.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) depot -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install depot' as const,
}

export type DepotPackage = typeof depotPackage
