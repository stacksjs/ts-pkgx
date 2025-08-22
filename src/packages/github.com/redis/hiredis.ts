/**
 * **redis** - pkgx package
 *
 * @domain `github.com/redis/hiredis`
 *
 * @install `launchpad install github.com/redis/hiredis`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomredishiredis
 * console.log(pkg.name)        // "redis"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/redis/hiredis.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomredishiredisPackage = {
  /**
   * The display name of this package.
   */
  name: 'redis' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/redis/hiredis' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/redis/hiredis' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/redis/hiredis -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/redis/hiredis' as const,
}

export type GithubcomredishiredisPackage = typeof githubcomredishiredisPackage
