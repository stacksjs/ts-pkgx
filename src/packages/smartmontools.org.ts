/**
 * **+smartmontools.org -- $SHELL -i** - SMART hard drive monitoring
 *
 * @domain `smartmontools.org`
 * @programs `smartctl`, `smartd`
 * @version `7.5.0` (3 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/smartmontools-org.md
 *
 * @install `sh <(curl https://pkgx.sh) +smartmontools.org -- $SHELL -i`
 * @aliases `+smartmontools.org -- $SHELL -i`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.smartmontoolsorgSHELLi
 * // Or access via domain
 * const samePkg = pantry.smartmontoolsorg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "smartmontools.org"
 * console.log(pkg.description) // "SMART hard drive monitoring"
 * console.log(pkg.programs)    // ["smartctl", "smartd"]
 * console.log(pkg.versions[0]) // "7.5.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/smartmontools-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const smartmontoolsorgSHELLiPackage = {
  /**
   * The display name of this package.
   */
  name: 'smartmontools.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'smartmontools.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'SMART hard drive monitoring' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/smartmontools.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +smartmontools.org -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'smartctl',
    'smartd',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '7.5.0',
    '7.4.0',
    '7.3.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    '+smartmontools.org -- $SHELL -i',
  ] as const,
  fullPath: 'smartmontools.org' as const,
}

export type SmartmontoolsorgSHELLiPackage = typeof smartmontoolsorgSHELLiPackage
