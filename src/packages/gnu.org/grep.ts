/**
 * **grep** - Package from pantry: gnu.org/grep
 *
 * @domain `gnu.org/grep`
 *
 * @install `launchpad install gnu.org/grep`
 * @dependencies `pcre.org/v2`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gnuorggrep
 * console.log(pkg.name)        // "grep"
 * console.log(pkg.description) // "Package from pantry: gnu.org/grep"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/grep.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gnuorggrepPackage = {
  /**
   * The display name of this package.
   */
  name: 'grep' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnu.org/grep' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: gnu.org/grep' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gnu.org/grep' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +gnu.org/grep -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gnu.org/grep' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pcre.org/v2',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/grep/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GnuorggrepPackage = typeof gnuorggrepPackage
