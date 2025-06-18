/**
 * **github.com/aldanial/cloc** - cloc counts blank lines, comment lines, and physical lines of source code in many programming languages.
 *
 * @domain `github.com/AlDanial/cloc`
 * @programs `cloc`, `config_data`
 * @version `2.4.0` (4 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +github.com/AlDanial/cloc -- $SHELL -i`
 * @aliases `github.com/aldanial/cloc`, `AlDanial/cloc`
 * @dependencies `perl.org^5`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomaldanialcloc
 * // Or access via domain
 * const samePkg = pantry.githubcomaldanialcloc
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "github.com/AlDanial/cloc"
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
  name: 'github.com/AlDanial/cloc' as const,
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
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +github.com/AlDanial/cloc -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'cloc',
    'config_data',
  ] as const,
  companions: [] as const,
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
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/aldanial/cloc',
    'AlDanial/cloc',
  ] as const,
  fullPath: 'github.com/AlDanial/cloc' as const,
}

export type GithubcomaldanialclocPackage = typeof githubcomaldanialclocPackage
