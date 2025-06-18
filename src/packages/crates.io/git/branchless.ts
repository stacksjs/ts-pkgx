/**
 * **crates.io/git-branchless** - pkgx package
 *
 * @domain `crates.io/git/branchless`
 *
 * @install `pkgx crates.io/git-branchless`
 * @name `git-branchless`
 * @aliases `crates.io/git-branchless`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.cratesiogitbranchless
 * // Or access via domain
 * const samePkg = pantry.cratesiogitbranchless
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "git-branchless"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/git/branchless.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiogitbranchlessPackage = {
  /**
   * The display name of this package.
   */
  name: 'git-branchless' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/git/branchless' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx crates.io/git-branchless' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'crates.io/git-branchless',
  ] as const,
  fullPath: 'crates.io/git-branchless' as const,
}

export type CratesiogitbranchlessPackage = typeof cratesiogitbranchlessPackage
