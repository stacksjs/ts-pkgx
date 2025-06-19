/**
 * **pyright** - Static Type Checker for Python
 *
 * @domain `microsoft.com/pyright`
 * @programs `pyright`
 * @version `1.1.402` (49 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install pyright`
 * @name `pyright`
 * @dependencies `nodejs.org^20`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.pyright
 * // Or access via domain
 * const samePkg = pantry.microsoftcompyright
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "pyright"
 * console.log(pkg.description) // "Static Type Checker for Python"
 * console.log(pkg.programs)    // ["pyright"]
 * console.log(pkg.versions[0]) // "1.1.402" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/microsoft-com/pyright.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pyrightPackage = {
  /**
   * The display name of this package.
   */
  name: 'pyright' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'microsoft.com/pyright' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Static Type Checker for Python' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/microsoft.com/pyright/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install pyright' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'pyright',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'nodejs.org^20',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.1.402',
    '1.1.401',
    '1.1.400',
    '1.1.399',
    '1.1.398',
    '1.1.397',
    '1.1.396',
    '1.1.395',
    '1.1.394',
    '1.1.393',
    '1.1.392',
    '1.1.391',
    '1.1.390',
    '1.1.389',
    '1.1.388',
    '1.1.387',
    '1.1.386',
    '1.1.385',
    '1.1.384',
    '1.1.383',
    '1.1.382',
    '1.1.381',
    '1.1.380',
    '1.1.379',
    '1.1.378',
    '1.1.377',
    '1.1.376',
    '1.1.375',
    '1.1.374',
    '1.1.373',
    '1.1.372',
    '1.1.371',
    '1.1.370',
    '1.1.369',
    '1.1.368',
    '1.1.367',
    '1.1.366',
    '1.1.365',
    '1.1.364',
    '1.1.363',
    '1.1.362',
    '1.1.361',
    '1.1.360',
    '1.1.359',
    '1.1.358',
    '1.1.357',
    '1.1.356',
    '1.1.355',
    '1.1.354',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type PyrightPackage = typeof pyrightPackage
