/**
 * **github.com/oneapi-src/oneTBB** - pkgx package
 *
 * @domain `github.com/oneapi/src/oneTBB`
 *
 * @install `pkgx github.com/oneapi-src/oneTBB`
 * @aliases `github.com/oneapi-src/oneTBB`, `oneapi-src/oneTBB`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomoneapisrconeTBB
 * // Or access via domain
 * const samePkg = pantry.githubcomoneapisrconetbb
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "oneapi-src"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/oneapi/src/oneTBB.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomoneapisrconeTBBPackage = {
  /**
   * The display name of this package.
   */
  name: 'oneapi-src' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/oneapi/src/oneTBB' as const,
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
  installCommand: 'pkgx github.com/oneapi-src/oneTBB' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/oneapi-src/oneTBB',
    'oneapi-src/oneTBB',
  ] as const,
  fullPath: 'github.com/oneapi-src/oneTBB' as const,
}

export type GithubcomoneapisrconeTBBPackage = typeof githubcomoneapisrconeTBBPackage
