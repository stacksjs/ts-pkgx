/**
 * **crates.io/git-trim** - pkgx package
 *
 * @domain `crates.io/git/trim`
 *
 * @install `pkgx crates.io/git-trim`
 * @name `git-trim`
 * @aliases `crates.io/git-trim`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.cratesiogittrim
 * // Or access via domain
 * const samePkg = pantry.cratesiogittrim
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "git-trim"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/git/trim.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiogittrimPackage = {
  /**
   * The display name of this package.
   */
  name: 'git-trim' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/git/trim' as const,
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
  installCommand: 'pkgx crates.io/git-trim' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'crates.io/git-trim',
  ] as const,
  fullPath: 'crates.io/git-trim' as const,
}

export type CratesiogittrimPackage = typeof cratesiogittrimPackage
