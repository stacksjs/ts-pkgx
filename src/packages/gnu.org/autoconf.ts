/**
 * **autoconf** - Package from pantry: gnu.org/autoconf
 *
 * @domain `gnu.org/autoconf`
 *
 * @install `launchpad install gnu.org/autoconf`
 * @dependencies `gnu.org/m4@1`, `perl.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gnuorgautoconf
 * console.log(pkg.name)        // "autoconf"
 * console.log(pkg.description) // "Package from pantry: gnu.org/autoconf"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/autoconf.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gnuorgautoconfPackage = {
  /**
   * The display name of this package.
   */
  name: 'autoconf' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnu.org/autoconf' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: gnu.org/autoconf' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gnu.org/autoconf' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +gnu.org/autoconf -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gnu.org/autoconf' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnu.org/m4@1',
    'perl.org',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/autoconf/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GnuorgautoconfPackage = typeof gnuorgautoconfPackage
