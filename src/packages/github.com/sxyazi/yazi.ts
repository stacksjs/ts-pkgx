/**
 * **yazi** - 💥 Blazing fast terminal file manager written in Rust, based on async I/O.
 *
 * @domain `github.com/sxyazi/yazi`
 * @programs `yazi`
 * @version `25.5.31` (22 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) yazi`
 * @name `yazi`
 * @aliases `sxyazi/yazi`
 * @dependencies `stedolan.github.io/jq`, `poppler.freedesktop.org`, `crates.io/fd-find`, ... (+3 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.yazi
 * // Or access via domain
 * const samePkg = pantry.githubcomsxyaziyazi
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "yazi"
 * console.log(pkg.description) // "💥 Blazing fast terminal file manager written i..."
 * console.log(pkg.programs)    // ["yazi"]
 * console.log(pkg.versions[0]) // "25.5.31" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/sxyazi/yazi.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const yaziPackage = {
  /**
   * The display name of this package.
   */
  name: 'yazi' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/sxyazi/yazi' as const,
  /**
   * Brief description of what this package does.
   */
  description: '💥 Blazing fast terminal file manager written in Rust, based on async I/O.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/sxyazi/yazi/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) yazi' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'yazi',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'stedolan.github.io/jq',
    'poppler.freedesktop.org',
    'crates.io/fd-find',
    'crates.io/ripgrep',
    'github.com/junegunn/fzf',
    'crates.io/zoxide',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '25.5.31',
    '25.5.28',
    '25.4.8',
    '25.3.2',
    '25.2.26',
    '25.2.11',
    '25.2.7',
    '0.4.2',
    '0.4.1',
    '0.4.0',
    '0.3.3',
    '0.3.2',
    '0.3.1',
    '0.3.0',
    '0.2.5',
    '0.2.4',
    '0.2.3',
    '0.2.2',
    '0.2.1',
    '0.2.0',
    '0.1.5',
    '0.1.4',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'sxyazi/yazi',
  ] as const,
  fullPath: 'github.com/sxyazi/yazi' as const,
}

export type YaziPackage = typeof yaziPackage
