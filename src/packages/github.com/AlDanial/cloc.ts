/**
 * **cloc** - Package from pantry: github.com/AlDanial/cloc
 *
 * @domain `github.com/AlDanial/cloc`
 *
 * @install `launchpad install github.com/AlDanial/cloc`
 * @dependencies `perl.org^5`
 * @companions `PERL5LIB^$PERL5LIB:{{prefix}}/lib/perl5`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomaldanialcloc
 * console.log(pkg.name)        // "cloc"
 * console.log(pkg.description) // "Package from pantry: github.com/AlDanial/cloc"
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
  description: 'Package from pantry: github.com/AlDanial/cloc' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/AlDanial/cloc' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/AlDanial/cloc -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/AlDanial/cloc' as const,
  programs: [] as const,
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
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/AlDanial/cloc/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomaldanialclocPackage = typeof githubcomaldanialclocPackage
