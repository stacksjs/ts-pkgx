/**
 * **stow** - Package from pantry: gnu.org/stow
 *
 * @domain `gnu.org/stow`
 *
 * @install `launchpad install gnu.org/stow`
 * @dependencies `perl.org^5.6.1`
 * @companions `PERL5LIB^${{prefix}}/lib/perl5`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gnuorgstow
 * console.log(pkg.name)        // "stow"
 * console.log(pkg.description) // "Package from pantry: gnu.org/stow"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/stow.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gnuorgstowPackage = {
  /**
   * The display name of this package.
   */
  name: 'stow' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnu.org/stow' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: gnu.org/stow' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gnu.org/stow' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +gnu.org/stow -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gnu.org/stow' as const,
  programs: [] as const,
  /**
   * Related packages that work well with this package.
   * Consider installing these for enhanced functionality.
   */
  companions: [
    'PERL5LIB^${{prefix}}/lib/perl5',
  ] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'perl.org^5.6.1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/stow/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GnuorgstowPackage = typeof gnuorgstowPackage
