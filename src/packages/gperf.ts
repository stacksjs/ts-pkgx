/**
 * **gperf** - Perfect hash function generator
 *
 * @domain `gnu.org/gperf`
 * @programs `gperf`
 * @version `3.3.0` (4 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/gperf.md
 *
 * @install `sh <(curl https://pkgx.sh) gperf`
 * @name `gperf`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.gperf
 * // Or access via domain
 * const samePkg = pantry.gnuorggperf
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "gperf"
 * console.log(pkg.description) // "Perfect hash function generator"
 * console.log(pkg.programs)    // ["gperf"]
 * console.log(pkg.versions[0]) // "3.3.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/gperf.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gperfPackage = {
  /**
   * The display name of this package.
   */
  name: 'gperf' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnu.org/gperf' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Perfect hash function generator' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/gperf/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) gperf' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'gperf',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.3.0',
    '3.2.1',
    '3.2.0',
    '3.1.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'gnu.org/gperf' as const,
}

export type GperfPackage = typeof gperfPackage
