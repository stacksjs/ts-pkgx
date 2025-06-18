/**
 * **crates.io/git-gone** - pkgx package
 *
 * @domain `crates.io/git/gone`
 *
 * @install `pkgx crates.io/git-gone`
 * @name `git-gone`
 * @aliases `crates.io/git-gone`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.cratesiogitgone
 * // Or access via domain
 * const samePkg = pantry.cratesiogitgone
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "git-gone"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/git/gone.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiogitgonePackage = {
  /**
   * The display name of this package.
   */
  name: 'git-gone' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/git/gone' as const,
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
  installCommand: 'pkgx crates.io/git-gone' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'crates.io/git-gone',
  ] as const,
  fullPath: 'crates.io/git-gone' as const,
}

export type CratesiogitgonePackage = typeof cratesiogitgonePackage
