/**
 * **automake** - Package from pantry: gnu.org/automake
 *
 * @domain `gnu.org/automake`
 *
 * @install `launchpad install gnu.org/automake`
 * @dependencies `gnu.org/autoconf^2.65.0`, `perl.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gnuorgautomake
 * console.log(pkg.name)        // "automake"
 * console.log(pkg.description) // "Package from pantry: gnu.org/automake"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/automake.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gnuorgautomakePackage = {
  /**
   * The display name of this package.
   */
  name: 'automake' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnu.org/automake' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: gnu.org/automake' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gnu.org/automake' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +gnu.org/automake -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gnu.org/automake' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnu.org/autoconf^2.65.0',
    'perl.org',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/automake/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GnuorgautomakePackage = typeof gnuorgautomakePackage
