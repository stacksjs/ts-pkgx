/**
 * **pwsh** - PowerShell for every system!
 *
 * @domain `microsoft.com/PowerShell`
 * @programs `pwsh`
 * @version `7.5.1` (6 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/microsoft-com/PowerShell.md
 *
 * @install `sh <(curl https://pkgx.sh) pwsh`
 * @name `pwsh`
 * @aliases `PowerShell`
 * @dependencies `openssl.org^1.1`, `linuxunicode.org^71`, `unicode.org^71`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.pwsh
 * // Or access via domain
 * const samePkg = pantry.microsoftcompowershell
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "pwsh"
 * console.log(pkg.description) // "PowerShell for every system!"
 * console.log(pkg.programs)    // ["pwsh"]
 * console.log(pkg.versions[0]) // "7.5.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/microsoft-com/PowerShell.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pwshPackage = {
  /**
   * The display name of this package.
   */
  name: 'pwsh' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'microsoft.com/PowerShell' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'PowerShell for every system!' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/microsoft.com/PowerShell/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) pwsh' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'pwsh',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org^1.1',
    'linuxunicode.org^71',
    'unicode.org^71',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '7.5.1',
    '7.5.0',
    '7.4.10',
    '7.4.7',
    '7.4.5',
    '7.2.24',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'PowerShell',
  ] as const,
  fullPath: 'microsoft.com/PowerShell' as const,
}

export type PwshPackage = typeof pwshPackage
