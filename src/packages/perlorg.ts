/**
 * **perl.org** - Highly capable, feature-rich programming language
 *
 * @domain `perl.org`
 * @programs `corelist`, `cpan`, `enc2xs`, `encguess`, `h2ph`, ... (+25 more)
 * @version `5.40.2` (14 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +perl.org -- $SHELL -i`
 * @dependencies `llvm.org<17`, `gnu.org/make`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.perlorg
 * console.log(pkg.name)        // "perl.org"
 * console.log(pkg.description) // "Highly capable, feature-rich programming language"
 * console.log(pkg.programs)    // ["corelist", "cpan", ...]
 * console.log(pkg.versions[0]) // "5.40.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/perl-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const perlorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'perl.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'perl.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Highly capable, feature-rich programming language' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/perl.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +perl.org -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'corelist',
    'cpan',
    'enc2xs',
    'encguess',
    'h2ph',
    'h2xs',
    'instmodsh',
    'json_pp',
    'libnetcfg',
    'perl',
    'perlbug',
    'perldoc',
    'perlivp',
    'perlthanks',
    'piconv',
    'pl2pm',
    'pod2html',
    'pod2man',
    'pod2text',
    'pod2usage',
    'podchecker',
    'prove',
    'ptar',
    'ptardiff',
    'ptargrep',
    'shasum',
    'splain',
    'streamzip',
    'xsubpp',
    'zipdetails',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'llvm.org<17',
    'gnu.org/make',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '5.40.2',
    '5.40.1',
    '5.40.0',
    '5.38.4',
    '5.38.3',
    '5.38.2',
    '5.38.1',
    '5.38.0',
    '5.36.3',
    '5.36.2',
    '5.36.1',
    '5.36.0',
    '5.34.3',
    '5.34.2',
  ] as const,
  aliases: [] as const,
}

export type PerlorgPackage = typeof perlorgPackage
