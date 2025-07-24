/**
 * **ast-grep.github.io** - Package from pantry: ast-grep.github.io
 *
 * @domain `ast-grep.github.io`
 *
 * @install `launchpad install ast-grep.github.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.astgrepgithubio
 * console.log(pkg.name)        // "ast-grep.github.io"
 * console.log(pkg.description) // "Package from pantry: ast-grep.github.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/ast-grep-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const astgrepgithubioPackage = {
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
  description: 'Package from pantry: ast-grep.github.io' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install ast-grep.github.io' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +ast-grep.github.io -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install ast-grep.github.io' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/ast-grep.github.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type AstgrepgithubioPackage = typeof astgrepgithubioPackage
