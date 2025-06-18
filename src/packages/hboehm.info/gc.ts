/**
 * **gc** - The Boehm-Demers-Weiser conservative C/C++ Garbage Collector (bdwgc, also known as bdw-gc, boehm-gc, libgc)
 *
 * @domain `hboehm.info/gc`
 * @version `8.2.8` (7 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +hboehm.info/gc -- $SHELL -i`
 * @aliases `gc`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.gc
 * // Or access via domain
 * const samePkg = pantry.hboehminfogc
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "hboehm.info/gc"
 * console.log(pkg.description) // "The Boehm-Demers-Weiser conservative C/C++ Garb..."
 * console.log(pkg.versions[0]) // "8.2.8" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/hboehm-info/gc.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gcPackage = {
  /**
   * The display name of this package.
   */
  name: 'hboehm.info/gc' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'hboehm.info/gc' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'The Boehm-Demers-Weiser conservative C/C++ Garbage Collector (bdwgc, also known as bdw-gc, boehm-gc, libgc)' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/hboehm.info/gc/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +hboehm.info/gc -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '8.2.8',
    '8.2.6',
    '8.2.4',
    '8.0.14',
    '8.0.12',
    '7.6.22',
    '7.6.20',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'gc',
  ] as const,
  fullPath: 'hboehm.info/gc' as const,
}

export type GcPackage = typeof gcPackage
