/**
 * **bc** - Package from pantry: gnu.org/bc
 *
 * @domain `gnu.org/bc`
 *
 * @install `launchpad install gnu.org/bc`
 * @dependencies `github.com/westes/flex^2.6`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gnuorgbc
 * console.log(pkg.name)        // "bc"
 * console.log(pkg.description) // "Package from pantry: gnu.org/bc"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/bc.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gnuorgbcPackage = {
  /**
   * The display name of this package.
   */
  name: 'bc' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnu.org/bc' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: gnu.org/bc' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gnu.org/bc' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +gnu.org/bc -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gnu.org/bc' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'github.com/westes/flex^2.6',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/bc/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GnuorgbcPackage = typeof gnuorgbcPackage
