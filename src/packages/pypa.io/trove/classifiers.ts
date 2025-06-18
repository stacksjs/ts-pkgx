/**
 * **pypa.io/trove-classifiers** - pkgx package
 *
 * @domain `pypa.io/trove/classifiers`
 *
 * @install `pkgx pypa.io/trove-classifiers`
 * @name `trove-classifiers`
 * @aliases `pypa.io/trove-classifiers`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.pypaiotroveclassifiers
 * // Or access via domain
 * const samePkg = pantry.pypaiotroveclassifiers
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "trove-classifiers"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pypa-io/trove/classifiers.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pypaiotroveclassifiersPackage = {
  /**
   * The display name of this package.
   */
  name: 'trove-classifiers' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'pypa.io/trove/classifiers' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx pypa.io/trove-classifiers' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'pypa.io/trove-classifiers',
  ] as const,
  fullPath: 'pypa.io/trove-classifiers' as const,
}

export type PypaiotroveclassifiersPackage = typeof pypaiotroveclassifiersPackage
