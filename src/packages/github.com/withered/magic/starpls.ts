/**
 * **github.com/withered-magic/starpls** - pkgx package
 *
 * @domain `github.com/withered/magic/starpls`
 *
 * @install `pkgx github.com/withered-magic/starpls`
 * @aliases `github.com/withered-magic/starpls`, `withered-magic/starpls`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomwitheredmagicstarpls
 * // Or access via domain
 * const samePkg = pantry.githubcomwitheredmagicstarpls
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "withered-magic"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/withered/magic/starpls.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomwitheredmagicstarplsPackage = {
  /**
   * The display name of this package.
   */
  name: 'withered-magic' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/withered/magic/starpls' as const,
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
  installCommand: 'pkgx github.com/withered-magic/starpls' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/withered-magic/starpls',
    'withered-magic/starpls',
  ] as const,
  fullPath: 'github.com/withered-magic/starpls' as const,
}

export type GithubcomwitheredmagicstarplsPackage = typeof githubcomwitheredmagicstarplsPackage
