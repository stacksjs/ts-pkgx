/**
 * **redis.io** - Package from pantry: redis.io
 *
 * @domain `redis.io`
 *
 * @install `launchpad install redis.io`
 * @dependencies `openssl.org^1`, `freedesktop.org/pkg-config>=0.29`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.redisio
 * console.log(pkg.name)        // "redis.io"
 * console.log(pkg.description) // "Package from pantry: redis.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/redis-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const redisioPackage = {
  /**
   * The display name of this package.
   */
  name: 'redis.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'redis.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: redis.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install redis.io' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org^1',
    'freedesktop.org/pkg-config>=0.29',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/redis.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type RedisioPackage = typeof redisioPackage
