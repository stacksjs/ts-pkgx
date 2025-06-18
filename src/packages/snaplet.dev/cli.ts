/**
 * **snaplet** - pkgx package
 *
 * @domain `snaplet.dev/cli`
 * @programs `snaplet`
 * @version `0.92.1` (67 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install snaplet`
 * @aliases `snaplet`
 * @dependencies `nodejs.org^10.13.0 || ^12 || ^14 || ^16 || ^18 || ^20`, `npmjs.com`, `python.org^3 # node-gyp needs python to build`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.snaplet
 * // Or access via domain
 * const samePkg = pantry.snapletdevcli
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "cli"
 * console.log(pkg.programs)    // ["snaplet"]
 * console.log(pkg.versions[0]) // "0.92.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/snaplet-dev/cli.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const snapletPackage = {
  /**
   * The display name of this package.
   */
  name: 'cli' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'snaplet.dev/cli' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/snaplet.dev/cli/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install snaplet' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'snaplet',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'nodejs.org^10.13.0 || ^12 || ^14 || ^16 || ^18 || ^20',
    'npmjs.com',
    'python.org^3 # node-gyp needs python to build',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.92.1',
    '0.91.1',
    '0.91.0',
    '0.90.2',
    '0.90.1',
    '0.90.0',
    '0.89.6',
    '0.89.5',
    '0.89.4',
    '0.89.3',
    '0.89.2',
    '0.89.1',
    '0.89.0',
    '0.88.2',
    '0.88.0',
    '0.87.3',
    '0.87.2',
    '0.87.1',
    '0.87.0',
    '0.86.3',
    '0.86.2',
    '0.86.1',
    '0.86.0',
    '0.85.2',
    '0.85.0',
    '0.84.0',
    '0.83.2',
    '0.83.1',
    '0.83.0',
    '0.82.1',
    '0.82.0',
    '0.81.1',
    '0.81.0',
    '0.80.0',
    '0.79.2',
    '0.79.1',
    '0.79.0',
    '0.78.3',
    '0.78.1',
    '0.78.0',
    '0.77.4',
    '0.77.3',
    '0.77.2',
    '0.77.1',
    '0.77.0',
    '0.76.4',
    '0.76.3',
    '0.76.2',
    '0.76.1',
    '0.76.0',
    '0.75.15',
    '0.75.14',
    '0.75.13',
    '0.75.12',
    '0.75.11',
    '0.75.10',
    '0.75.9',
    '0.75.8',
    '0.75.7',
    '0.75.6',
    '0.74.4',
    '0.74.3',
    '0.74.2',
    '0.74.1',
    '0.74.0',
    '0.73.1',
    '0.73.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'snaplet',
  ] as const,
}

export type SnapletPackage = typeof snapletPackage
