/**
 * **PowerShell** - Package from pantry: microsoft.com/PowerShell
 *
 * @domain `microsoft.com/PowerShell`
 *
 * @install `launchpad install microsoft.com/PowerShell`
 * @dependencies `openssl.org^1.1`, `linux:unicode.org^71` (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.microsoftcompowershell
 * console.log(pkg.name)        // "PowerShell"
 * console.log(pkg.description) // "Package from pantry: microsoft.com/PowerShell"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/microsoft-com/PowerShell.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const microsoftcompowershellPackage = {
  /**
   * The display name of this package.
   */
  name: 'PowerShell' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'microsoft.com/PowerShell' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: microsoft.com/PowerShell' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install microsoft.com/PowerShell' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +microsoft.com/PowerShell -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install microsoft.com/PowerShell' as const,
  programs: [] as const,
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
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/microsoft.com/PowerShell/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type MicrosoftcompowershellPackage = typeof microsoftcompowershellPackage
