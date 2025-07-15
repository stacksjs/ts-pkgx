/**
 * **wget** - Package from pantry: gnu.org/wget
 *
 * @domain `gnu.org/wget`
 *
 * @install `launchpad install gnu.org/wget`
 * @dependencies `openssl.org^1.1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gnuorgwget
 * console.log(pkg.name)        // "wget"
 * console.log(pkg.description) // "Package from pantry: gnu.org/wget"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/wget.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gnuorgwgetPackage = {
  /**
   * The display name of this package.
   */
  name: 'wget' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnu.org/wget' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: gnu.org/wget' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gnu.org/wget' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +gnu.org/wget -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gnu.org/wget' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org^1.1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/wget/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GnuorgwgetPackage = typeof gnuorgwgetPackage
