/**
 * **redis** - Redis is an in-memory database that persists on disk. The data model is key-value, but many different kind of values are supported: Strings, Lists, Sets, Sorted Sets, Hashes, Streams, HyperLogLogs, Bitmaps.
 *
 * @domain `redis.io`
 * @programs `redis-server`, `redis-cli`, `redis-benchmark`
 * @version `8.0.3` (40 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install redis`
 * @name `redis`
 * @dependencies `openssl.org^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.redis
 * // Or access via domain
 * const samePkg = pantry.redisio
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "redis"
 * console.log(pkg.description) // "Redis is an in-memory database that persists on..."
 * console.log(pkg.programs)    // ["redis-server", "redis-cli", ...]
 * console.log(pkg.versions[0]) // "8.0.3" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/redis-io.md
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
  domain: 'redis.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Redis is an in-memory database that persists on disk. The data model is key-value, but many different kind of values are supported: Strings, Lists, Sets, Sorted Sets, Hashes, Streams, HyperLogLogs, Bitmaps.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/redis.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install redis' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'redis-server',
    'redis-cli',
    'redis-benchmark',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org^1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '8.0.3',
    '8.0.2',
    '8.0.1',
    '8.0.0',
    '7.4.5',
    '7.4.4',
    '7.4.2',
    '7.4.1',
    '7.4.0',
    '7.2.10',
    '7.2.9',
    '7.2.8',
    '7.2.7',
    '7.2.6',
    '7.2.5',
    '7.2.4',
    '7.2.3',
    '7.2.2',
    '7.2.1',
    '7.2.0',
    '7.0.15',
    '7.0.14',
    '7.0.13',
    '7.0.12',
    '7.0.11',
    '7.0.10',
    '7.0.9',
    '7.0.8',
    '7.0.7',
    '6.2.18',
    '6.2.17',
    '6.2.16',
    '6.2.15',
    '6.2.14',
    '6.2.13',
    '6.2.12',
    '6.2.11',
    '6.0.20',
    '6.0.19',
    '6.0.18',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +redis.io -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install redis' as const,
}

export type RedisPackage = typeof redisPackage
