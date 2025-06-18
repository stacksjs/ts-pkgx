/**
 * **depot** - 🖥️ Depot CLI, build your Docker images in the cloud
 *
 * @domain `depot.dev`
 * @programs `depot`
 * @version `2.88.0` (42 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install depot`
 * @aliases `depot`
 * @dependencies `go.dev~1.21`, `gnu.org/coreutils`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.depot
 * // Or access via domain
 * const samePkg = pantry.depotdev
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "depot.dev"
 * console.log(pkg.description) // "🖥️ Depot CLI, build your Docker images in the ..."
 * console.log(pkg.programs)    // ["depot"]
 * console.log(pkg.versions[0]) // "2.88.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/depot-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const depotPackage = {
  /**
   * The display name of this package.
   */
  name: 'depot.dev' as const,
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
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
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
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'go.dev~1.21',
    'gnu.org/coreutils',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
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
  aliases: [
    'depot',
  ] as const,
}

export type DepotPackage = typeof depotPackage
