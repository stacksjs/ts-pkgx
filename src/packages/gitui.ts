/**
 * **gitui** - Blazing 💥 fast terminal-ui for git written in rust 🦀
 *
 * @domain `crates.io/gitui`
 * @programs `gitui`
 * @version `0.27.0` (14 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/crates-io/gitui.md
 *
 * @install `sh <(curl https://pkgx.sh) gitui`
 * @name `gitui`
 * @dependencies `perl.org`, `openssl.org^1.1`, `zlib.net^1`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.gitui
 * // Or access via domain
 * const samePkg = pantry.cratesiogitui
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "gitui"
 * console.log(pkg.description) // "Blazing 💥 fast terminal-ui for git written in ..."
 * console.log(pkg.programs)    // ["gitui"]
 * console.log(pkg.versions[0]) // "0.27.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/gitui.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gituiPackage = {
  /**
   * The display name of this package.
   */
  name: 'gitui' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/gitui' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Blazing 💥 fast terminal-ui for git written in rust 🦀' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/gitui/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) gitui' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'gitui',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'perl.org',
    'openssl.org^1.1',
    'zlib.net^1',
    'libgit2.org~1.7',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.27.0',
    '0.26.3',
    '0.26.2',
    '0.26.1',
    '0.26.0',
    '0.25.2',
    '0.25.1',
    '0.25.0',
    '0.24.3',
    '0.24.2',
    '0.24.1',
    '0.24.0',
    '0.23.0',
    '0.22.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'crates.io/gitui' as const,
}

export type GituiPackage = typeof gituiPackage
