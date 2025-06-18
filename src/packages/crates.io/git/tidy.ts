/**
 * **crates.io/git-tidy** - pkgx package
 *
 * @domain `crates.io/git/tidy`
 *
 * @install `pkgx crates.io/git-tidy`
 * @name `git-tidy`
 * @aliases `crates.io/git-tidy`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.cratesiogittidy
 * // Or access via domain
 * const samePkg = pantry.cratesiogittidy
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "git-tidy"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/git/tidy.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiogittidyPackage = {
  /**
   * The display name of this package.
   */
  name: 'git-tidy' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/git/tidy' as const,
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
  installCommand: 'pkgx crates.io/git-tidy' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'crates.io/git-tidy',
  ] as const,
  fullPath: 'crates.io/git-tidy' as const,
}

export type CratesiogittidyPackage = typeof cratesiogittidyPackage
