/**
 * **pwsh** - PowerShell for every system!
 *
 * @domain `microsoft.com/PowerShell`
 * @programs `pwsh`
 * @version `7.5.2` (8 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install pwsh`
 * @name `pwsh`
 * @dependencies `openssl.org^1.1`, `linux:unicode.org^71` (includes OS-specific dependencies with `os:package` format)
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
 * console.log(pkg.versions[0]) // "7.5.2" (latest)
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
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install pwsh' as const,
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
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'openssl.org^1.1',
    'linux:unicode.org^71',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '7.5.2',
    '7.5.1',
    '7.5.0',
    '7.4.11',
    '7.4.10',
    '7.4.7',
    '7.4.5',
    '7.2.24',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) pwsh -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install pwsh' as const,
}

export type PwshPackage = typeof pwshPackage
