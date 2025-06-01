/**
 * **+ast-grep.github.io -- $SHELL -i** - ⚡A CLI tool for code structural search, lint and rewriting. Written in Rust
 *
 * @domain `ast-grep.github.io`
 * @programs `sg`, `ast-grep`
 * @version `0.38.3` (80 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/ast-grep-github-io.md
 *
 * @install `sh <(curl https://pkgx.sh) +ast-grep.github.io -- $SHELL -i`
 * @aliases `+ast-grep.github.io -- $SHELL -i`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.astgrepgithubioSHELLi
 * // Or access via domain
 * const samePkg = pantry.astgrepgithubio
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "ast-grep.github.io"
 * console.log(pkg.description) // "⚡A CLI tool for code structural search, lint an..."
 * console.log(pkg.programs)    // ["sg", "ast-grep"]
 * console.log(pkg.versions[0]) // "0.38.3" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/ast-grep-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const astgrepgithubioSHELLiPackage = {
  /**
   * The display name of this package.
   */
  name: 'ast-grep.github.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'ast-grep.github.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: '⚡A CLI tool for code structural search, lint and rewriting. Written in Rust' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/ast-grep.github.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +ast-grep.github.io -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'sg',
    'ast-grep',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.38.3',
    '0.38.2',
    '0.38.1',
    '0.38.0',
    '0.37.0',
    '0.36.3',
    '0.36.2',
    '0.36.1',
    '0.36.0',
    '0.35.0',
    '0.34.4',
    '0.34.3',
    '0.34.2',
    '0.34.1',
    '0.34.0',
    '0.33.1',
    '0.33.0',
    '0.32.3',
    '0.32.2',
    '0.32.1',
    '0.32.0',
    '0.31.1',
    '0.31.0',
    '0.30.1',
    '0.30.0',
    '0.29.0',
    '0.28.1',
    '0.28.0',
    '0.27.2',
    '0.27.1',
    '0.27.0',
    '0.26.3',
    '0.26.2',
    '0.26.1',
    '0.26.0',
    '0.25.7',
    '0.25.6',
    '0.25.5',
    '0.25.4',
    '0.25.3',
    '0.25.2',
    '0.25.1',
    '0.25.0',
    '0.24.1',
    '0.24.0',
    '0.23.1',
    '0.23.0',
    '0.22.6',
    '0.22.5',
    '0.22.4',
    '0.22.3',
    '0.22.2',
    '0.22.1',
    '0.22.0',
    '0.21.4',
    '0.21.3',
    '0.21.2',
    '0.21.1',
    '0.21.0',
    '0.20.5',
    '0.20.4',
    '0.20.3',
    '0.20.2',
    '0.20.1',
    '0.20.0',
    '0.19.4',
    '0.19.3',
    '0.19.2',
    '0.19.1',
    '0.19.0',
    '0.18.1',
    '0.18.0',
    '0.17.1',
    '0.17.0',
    '0.16.1',
    '0.16.0',
    '0.15.1',
    '0.15.0',
    '0.14.4',
    '0.14.3',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    '+ast-grep.github.io -- $SHELL -i',
  ] as const,
  fullPath: 'ast-grep.github.io' as const,
}

export type AstgrepgithubioSHELLiPackage = typeof astgrepgithubioSHELLiPackage
