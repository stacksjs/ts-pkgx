/**
 * **redis** - Crafters of fine Open Source products
 *
 * @domain `redis.io`
 *
 * @install `pkgx redis.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.redisio
 * console.log(pkg.name)        // "redis"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/redis-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const redisioPackage = {
  /**
   * The display name of this package.
   */
  name: 'redis' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/redis.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'redis.io' as const,
  fullPath: 'redis.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx redis.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type RedisioPackage = typeof redisioPackage
