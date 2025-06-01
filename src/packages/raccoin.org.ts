/**
 * **raccoin** - Crypto Portfolio and Tax Reporting Tool
 *
 * @domain `raccoin.org`
 * @programs `raccoin`
 * @version `0.2.0` (2 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/raccoin-org.md
 *
 * @install `sh <(curl https://pkgx.sh) raccoin`
 * @aliases `raccoin`
 * @dependencies `gnu.org/libiconv^1`, `openssl.org^1.1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.raccoin
 * // Or access via domain
 * const samePkg = pantry.raccoinorg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "raccoin"
 * console.log(pkg.description) // "Crypto Portfolio and Tax Reporting Tool"
 * console.log(pkg.programs)    // ["raccoin"]
 * console.log(pkg.versions[0]) // "0.2.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/raccoin-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const raccoinPackage = {
  /**
   * The display name of this package.
   */
  name: 'raccoin' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'raccoin.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crypto Portfolio and Tax Reporting Tool' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/raccoin.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) raccoin' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'raccoin',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnu.org/libiconv^1',
    'openssl.org^1.1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.2.0',
    '0.1.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'raccoin',
  ] as const,
  fullPath: 'raccoin.org' as const,
}

export type RaccoinPackage = typeof raccoinPackage
