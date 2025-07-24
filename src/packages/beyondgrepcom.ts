/**
 * **beyondgrep.com** - Package from pantry: beyondgrep.com
 *
 * @domain `beyondgrep.com`
 *
 * @install `launchpad install beyondgrep.com`
 * @dependencies `perl.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.beyondgrepcom
 * console.log(pkg.name)        // "beyondgrep.com"
 * console.log(pkg.description) // "Package from pantry: beyondgrep.com"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/beyondgrep-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const beyondgrepcomPackage = {
  /**
   * The display name of this package.
   */
  name: 'beyondgrep.com' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'beyondgrep.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: beyondgrep.com' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install beyondgrep.com' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +beyondgrep.com -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install beyondgrep.com' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'perl.org',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/beyondgrep.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type BeyondgrepcomPackage = typeof beyondgrepcomPackage
