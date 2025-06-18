/**
 * **mz** - Real-time Data Integration and Transformation: use SQL to transform, deliver, and act on fast-changing data.
 *
 * @domain `materialize.com`
 * @programs `mz`
 * @version `0.112.2` (45 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/materialize-com.md
 *
 * @install `sh <(curl https://pkgx.sh) mz`
 * @name `mz`
 * @dependencies `openssl.org^1.1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.mz
 * // Or access via domain
 * const samePkg = pantry.materializecom
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "mz"
 * console.log(pkg.description) // "Real-time Data Integration and Transformation: ..."
 * console.log(pkg.programs)    // ["mz"]
 * console.log(pkg.versions[0]) // "0.112.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/materialize-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mzPackage = {
  /**
   * The display name of this package.
   */
  name: 'mz' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'materialize.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Real-time Data Integration and Transformation: use SQL to transform, deliver, and act on fast-changing data.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/materialize.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) mz' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'mz',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org^1.1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.112.2',
    '0.111.3',
    '0.110.1',
    '0.109.1',
    '0.108.4',
    '0.107.3',
    '0.106.2',
    '0.105.1',
    '0.104.2',
    '0.103.0',
    '0.102.2',
    '0.101.1',
    '0.100.1',
    '0.99.2',
    '0.98.6',
    '0.97.2',
    '0.96.2',
    '0.95.2',
    '0.94.2',
    '0.93.1',
    '0.92.1',
    '0.91.0',
    '0.90.1',
    '0.89.2',
    '0.88.1',
    '0.87.2',
    '0.86.1',
    '0.85.2',
    '0.84.2',
    '0.83.4',
    '0.82.2',
    '0.81.3',
    '0.80.2',
    '0.79.1',
    '0.77.1',
    '0.76.0',
    '0.75.1',
    '0.74.2',
    '0.73.0',
    '0.72.1',
    '0.71.0',
    '0.70.2',
    '0.69.1',
    '0.68.1',
    '0.67.3',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'materialize.com' as const,
}

export type MzPackage = typeof mzPackage
