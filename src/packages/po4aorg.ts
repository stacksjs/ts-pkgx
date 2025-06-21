/**
 * **po4a.org** - Package from pantry: po4a.org
 *
 * @domain `po4a.org`
 *
 * @install `launchpad install po4a.org`
 * @dependencies `gnu.org/gettext^0.22`, `perl.org^5.22`, `gnome.org/libxslt^1.1`
 * @companions `PERL5LIB^${{prefix}}/libexec/lib/perl5:$PERL5LIB`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.po4aorg
 * console.log(pkg.name)        // "po4a.org"
 * console.log(pkg.description) // "Package from pantry: po4a.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/po4a-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const po4aorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'po4a.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'po4a.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: po4a.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install po4a.org' as const,
  programs: [] as const,
  /**
   * Related packages that work well with this package.
   * Consider installing these for enhanced functionality.
   */
  companions: [
    'PERL5LIB^${{prefix}}/libexec/lib/perl5:$PERL5LIB',
  ] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnu.org/gettext^0.22',
    'perl.org^5.22',
    'gnome.org/libxslt^1.1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/po4a.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Po4aorgPackage = typeof po4aorgPackage
