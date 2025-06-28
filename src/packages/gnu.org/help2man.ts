/**
 * **help2man** - Package from pantry: gnu.org/help2man
 *
 * @domain `gnu.org/help2man`
 *
 * @install `launchpad install gnu.org/help2man`
 * @dependencies `gnu.org/gettext`, `perl.org^5.38 # perl modules require matching minors`
 * @companions `PERL5LIB^{{prefix}}/lib/perl5:{{prefix}}/libexec/lib/perl5:$PERL5LIB`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gnuorghelp2man
 * console.log(pkg.name)        // "help2man"
 * console.log(pkg.description) // "Package from pantry: gnu.org/help2man"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/help2man.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gnuorghelp2manPackage = {
  /**
   * The display name of this package.
   */
  name: 'help2man' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnu.org/help2man' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: gnu.org/help2man' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gnu.org/help2man' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +gnu.org/help2man -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gnu.org/help2man' as const,
  programs: [] as const,
  /**
   * Related packages that work well with this package.
   * Consider installing these for enhanced functionality.
   */
  companions: [
    'PERL5LIB^{{prefix}}/lib/perl5:{{prefix}}/libexec/lib/perl5:$PERL5LIB',
  ] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnu.org/gettext',
    'perl.org^5.38 # perl modules require matching minors',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/help2man/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Gnuorghelp2manPackage = typeof gnuorghelp2manPackage
