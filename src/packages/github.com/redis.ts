/**
 * **redis** - pkgx package
 *
 * @domain `github.com/redis`
 *
 * @install `pkgx github.com/redis`
 * @name `redis`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.redis
 * // Or access via domain
 * const samePkg = pantry.githubcomredis
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "redis"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/redis.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const redisPackage = {
  /**
   * The display name of this package.
   */
  name: 'redis' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/redis' as const,
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
  installCommand: 'pkgx github.com/redis' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/redis' as const,
}

export type RedisPackage = typeof redisPackage
