/**
 * **github.com/mop-tracker/mop** - pkgx package
 *
 * @domain `github.com/mop/tracker/mop`
 *
 * @install `pkgx github.com/mop-tracker/mop`
 * @aliases `github.com/mop-tracker/mop`, `mop-tracker/mop`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcommoptrackermop
 * // Or access via domain
 * const samePkg = pantry.githubcommoptrackermop
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "mop-tracker"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/mop/tracker/mop.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcommoptrackermopPackage = {
  /**
   * The display name of this package.
   */
  name: 'mop-tracker' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/mop/tracker/mop' as const,
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
  installCommand: 'pkgx github.com/mop-tracker/mop' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/mop-tracker/mop',
    'mop-tracker/mop',
  ] as const,
  fullPath: 'github.com/mop-tracker/mop' as const,
}

export type GithubcommoptrackermopPackage = typeof githubcommoptrackermopPackage
