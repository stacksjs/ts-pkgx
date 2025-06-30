/**
 * **libidn2** - Package from pantry: gnu.org/libidn2
 *
 * @domain `gnu.org/libidn2`
 *
 * @install `launchpad install gnu.org/libidn2`
 * @dependencies `gnu.org/gettext`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gnuorglibidn2
 * console.log(pkg.name)        // "libidn2"
 * console.log(pkg.description) // "Package from pantry: gnu.org/libidn2"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/libidn2.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gnuorglibidn2Package = {
  /**
   * The display name of this package.
   */
  name: 'libidn2' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnu.org/libidn2' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: gnu.org/libidn2' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gnu.org/libidn2' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +gnu.org/libidn2 -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gnu.org/libidn2' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnu.org/gettext',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/libidn2/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Gnuorglibidn2Package = typeof gnuorglibidn2Package
