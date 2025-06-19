/**
 * **cloc** - cloc counts blank lines, comment lines, and physical lines of source code in many programming languages.
 *
 * @domain `github.com/AlDanial/cloc`
 * @programs `cloc`, `config_data`
 * @version `2.4.0` (4 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +github.com/AlDanial/cloc -- $SHELL -i`
 * @dependencies `perl.org^5`
 * @companions `PERL5LIB^$PERL5LIB:{{prefix}}/lib/perl5`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomaldanialcloc
 * console.log(pkg.name)        // "cloc"
 * console.log(pkg.description) // "cloc counts blank lines, comment lines, and phy..."
 * console.log(pkg.programs)    // ["cloc", "config_data"]
 * console.log(pkg.versions[0]) // "2.4.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/AlDanial/cloc.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomaldanialclocPackage = {
  /**
   * The display name of this package.
   */
  name: 'cloc' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/AlDanial/cloc' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'cloc counts blank lines, comment lines, and physical lines of source code in many programming languages.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/AlDanial/cloc/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install +github.com/AlDanial/cloc -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'cloc',
    'config_data',
  ] as const,
  /**
   * Related packages that work well with this package.
   * Consider installing these for enhanced functionality.
   */
  companions: [
    'PERL5LIB^$PERL5LIB:{{prefix}}/lib/perl5',
  ] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'perl.org^5',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.4.0',
    '2.2.0',
    '2.0.0',
    '1.98.0',
  ] as const,
  aliases: [] as const,
}

export type GithubcomaldanialclocPackage = typeof githubcomaldanialclocPackage
