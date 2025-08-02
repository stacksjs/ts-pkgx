/**
 * **pyright** - Package from pantry: microsoft.com/pyright
 *
 * @domain `microsoft.com/pyright`
 *
 * @install `launchpad install microsoft.com/pyright`
 * @dependencies `nodejs.org^20`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.microsoftcompyright
 * console.log(pkg.name)        // "pyright"
 * console.log(pkg.description) // "Package from pantry: microsoft.com/pyright"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/microsoft-com/pyright.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const microsoftcompyrightPackage = {
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
  description: 'Package from pantry: microsoft.com/pyright' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install microsoft.com/pyright' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +microsoft.com/pyright -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install microsoft.com/pyright' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'nodejs.org^20',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/microsoft.com/pyright/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type MicrosoftcompyrightPackage = typeof microsoftcompyrightPackage
