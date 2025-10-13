/**
 * **tree-sitter.github.io** - Package from pantry: tree-sitter.github.io
 *
 * @domain `tree-sitter.github.io`
 *
 * @install `launchpad install tree-sitter.github.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.treesittergithubio
 * console.log(pkg.name)        // "tree-sitter.github.io"
 * console.log(pkg.description) // "Package from pantry: tree-sitter.github.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/tree-sitter-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const treesittergithubioPackage = {
  /**
   * The display name of this package.
   */
  name: 'tree-sitter.github.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'tree-sitter.github.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: tree-sitter.github.io' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install tree-sitter.github.io' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +tree-sitter.github.io -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install tree-sitter.github.io' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/tree-sitter.github.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type TreesittergithubioPackage = typeof treesittergithubioPackage
