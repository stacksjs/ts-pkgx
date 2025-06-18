/**
 * **github.com/chainguard-dev/apko** - pkgx package
 *
 * @domain `github.com/chainguard/dev/apko`
 *
 * @install `pkgx github.com/chainguard-dev/apko`
 * @aliases `github.com/chainguard-dev/apko`, `chainguard-dev/apko`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomchainguarddevapko
 * // Or access via domain
 * const samePkg = pantry.githubcomchainguarddevapko
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "chainguard-dev"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/chainguard/dev/apko.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomchainguarddevapkoPackage = {
  /**
   * The display name of this package.
   */
  name: 'chainguard-dev' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/chainguard/dev/apko' as const,
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
  installCommand: 'pkgx github.com/chainguard-dev/apko' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/chainguard-dev/apko',
    'chainguard-dev/apko',
  ] as const,
  fullPath: 'github.com/chainguard-dev/apko' as const,
}

export type GithubcomchainguarddevapkoPackage = typeof githubcomchainguarddevapkoPackage
