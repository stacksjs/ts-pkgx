/**
 * **libaec** - libaec - Adaptive Entropy Coding library
 *
 * @domain `dkrz.de/libaec`
 * @version `1.1.4` (5 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +dkrz.de/libaec -- $SHELL -i`
 * @aliases `libaec`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.libaec
 * // Or access via domain
 * const samePkg = pantry.dkrzdelibaec
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "dkrz.de/libaec"
 * console.log(pkg.description) // "libaec - Adaptive Entropy Coding library"
 * console.log(pkg.versions[0]) // "1.1.4" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/dkrz-de/libaec.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libaecPackage = {
  /**
   * The display name of this package.
   */
  name: 'dkrz.de/libaec' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'dkrz.de/libaec' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'libaec - Adaptive Entropy Coding library' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/dkrz.de/libaec/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +dkrz.de/libaec -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.1.4',
    '1.1.3',
    '1.1.2',
    '1.1.1',
    '1.0.6',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'libaec',
  ] as const,
  fullPath: 'dkrz.de/libaec' as const,
}

export type LibaecPackage = typeof libaecPackage
