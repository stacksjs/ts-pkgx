/**
 * **normalizer** - Truly universal encoding detector in pure Python
 *
 * @domain `github.com/Ousret/charset_normalizer`
 * @programs `normalizer`
 * @version `3.4.2` (4 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install normalizer`
 * @aliases `normalizer`
 * @dependencies `python.org>=3.11`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.normalizer
 * // Or access via domain
 * const samePkg = pantry.githubcomousretcharset_normalizer
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "charset_normalizer"
 * console.log(pkg.description) // "Truly universal encoding detector in pure Python"
 * console.log(pkg.programs)    // ["normalizer"]
 * console.log(pkg.versions[0]) // "3.4.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/Ousret/charset_normalizer.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const normalizerPackage = {
  /**
   * The display name of this package.
   */
  name: 'charset_normalizer' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/Ousret/charset_normalizer' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Truly universal encoding detector in pure Python' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/Ousret/charset_normalizer/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/Ousret/charset_normalizer' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install normalizer' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'normalizer',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org>=3.11',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.4.2',
    '3.4.1',
    '3.4.0',
    '3.3.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'normalizer',
  ] as const,
}

export type NormalizerPackage = typeof normalizerPackage
