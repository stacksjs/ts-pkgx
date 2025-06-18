/**
 * **crates.io/git-delta** - pkgx package
 *
 * @domain `crates.io/git/delta`
 *
 * @install `pkgx crates.io/git-delta`
 * @name `git-delta`
 * @aliases `crates.io/git-delta`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.cratesiogitdelta
 * // Or access via domain
 * const samePkg = pantry.cratesiogitdelta
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "git-delta"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/git/delta.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiogitdeltaPackage = {
  /**
   * The display name of this package.
   */
  name: 'git-delta' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/git/delta' as const,
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
  installCommand: 'pkgx crates.io/git-delta' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'crates.io/git-delta',
  ] as const,
  fullPath: 'crates.io/git-delta' as const,
}

export type CratesiogitdeltaPackage = typeof cratesiogitdeltaPackage
