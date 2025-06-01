/**
 * **teller** - Cloud native secrets management for developers - never leave your command line for secrets.
 *
 * @domain `tlr.dev`
 * @programs `teller`
 * @version `2.0.7` (5 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/tlr-dev.md
 *
 * @install `sh <(curl https://pkgx.sh) teller`
 * @aliases `teller`
 * @dependencies `openssl.org^1.1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.teller
 * // Or access via domain
 * const samePkg = pantry.tlrdev
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "teller"
 * console.log(pkg.description) // "Cloud native secrets management for developers ..."
 * console.log(pkg.programs)    // ["teller"]
 * console.log(pkg.versions[0]) // "2.0.7" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/tlr-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const tellerPackage = {
  /**
   * The display name of this package.
   */
  name: 'teller' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'tlr.dev' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Cloud native secrets management for developers - never leave your command line for secrets.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/tlr.dev/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) teller' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'teller',
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
    '2.0.7',
    '2.0.6',
    '2.0.5',
    '2.0.4',
    '1.5.6',
  ] as const,
  fullPath: 'tlr.dev' as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'teller',
  ] as const,
}

export type TellerPackage = typeof tellerPackage
