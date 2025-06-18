/**
 * **github.com/safe-waters/docker-lock** - pkgx package
 *
 * @domain `github.com/safe/waters/docker-lock`
 *
 * @install `pkgx github.com/safe-waters/docker-lock`
 * @aliases `github.com/safe-waters/docker-lock`, `safe-waters/docker-lock`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomsafewatersdockerlock
 * // Or access via domain
 * const samePkg = pantry.githubcomsafewatersdockerlock
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "safe-waters"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/safe/waters/docker-lock.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomsafewatersdockerlockPackage = {
  /**
   * The display name of this package.
   */
  name: 'safe-waters' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/safe/waters/docker-lock' as const,
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
  installCommand: 'pkgx github.com/safe-waters/docker-lock' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/safe-waters/docker-lock',
    'safe-waters/docker-lock',
  ] as const,
  fullPath: 'github.com/safe-waters/docker-lock' as const,
}

export type GithubcomsafewatersdockerlockPackage = typeof githubcomsafewatersdockerlockPackage
