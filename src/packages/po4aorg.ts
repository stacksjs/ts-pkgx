/**
 * **po4a.org** - Maintain the translations of your documentation with ease  (PO for anything)
 *
 * @domain `po4a.org`
 * @programs `msguntypot`, `po4a`, `po4a-display-man`, `po4a-display-pod`, `po4a-gettextize`, ... (+3 more)
 * @version `0.73.0` (5 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +po4a.org -- $SHELL -i`
 * @dependencies `gnu.org/gettext^0.22`, `perl.org^5.22`, `gnome.org/libxslt^1.1`, ... (+3 more)
 * @companions `PERL5LIB^${{prefix}}/libexec/lib/perl5:$PERL5LIB`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.po4aorg
 * console.log(pkg.name)        // "po4a.org"
 * console.log(pkg.description) // "Maintain the translations of your documentation..."
 * console.log(pkg.programs)    // ["msguntypot", "po4a", ...]
 * console.log(pkg.versions[0]) // "0.73.0" (latest)
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
  description: 'Maintain the translations of your documentation with ease  (PO for anything)' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/po4a.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +po4a.org -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'msguntypot',
    'po4a',
    'po4a-display-man',
    'po4a-display-pod',
    'po4a-gettextize',
    'po4a-normalize',
    'po4a-updatepo',
    'podselect',
  ] as const,
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
    'cpanmin.us',
    'docbook.org/xsl',
    'curl.se',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.73.0',
    '0.72.0',
    '0.71.0',
    '0.70.0',
    '0.69.0',
  ] as const,
  aliases: [] as const,
}

export type Po4aorgPackage = typeof po4aorgPackage
