/**
 * **eol** - CLI to show end-of-life dates for a number of products.
 *
 * @domain `endoflife.date`
 * @programs `eol`
 * @version `0.22.0` (9 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) eol`
 * @name `eol`
 * @dependencies `python.org^3.12`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.eol
 * // Or access via domain
 * const samePkg = pantry.endoflifedate
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "eol"
 * console.log(pkg.description) // "CLI to show end-of-life dates for a number of p..."
 * console.log(pkg.programs)    // ["eol"]
 * console.log(pkg.versions[0]) // "0.22.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/endoflife-date.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const eolPackage = {
  /**
   * The display name of this package.
   */
  name: 'eol' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'endoflife.date' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'CLI to show end-of-life dates for a number of products.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/endoflife.date/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) eol' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'eol',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org^3.12',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.22.0',
    '0.21.0',
    '0.20.0',
    '0.19.0',
    '0.18.0',
    '0.17.0',
    '0.16.0',
    '0.15.0',
    '0.14.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'eol' as const,
}

export type EolPackage = typeof eolPackage
