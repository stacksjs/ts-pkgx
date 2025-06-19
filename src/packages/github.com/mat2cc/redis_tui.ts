/**
 * **redis_tui** - Redis terminal application
 *
 * @domain `github.com/mat2cc/redis_tui`
 * @programs `redis_tui`
 * @version `0.2.4` (6 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install redis_tui`
 * @name `redis_tui`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.redistui
 * // Or access via domain
 * const samePkg = pantry.githubcommat2ccredis_tui
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "redis_tui"
 * console.log(pkg.description) // "Redis terminal application"
 * console.log(pkg.programs)    // ["redis_tui"]
 * console.log(pkg.versions[0]) // "0.2.4" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/mat2cc/redis_tui.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const redistuiPackage = {
  /**
   * The display name of this package.
   */
  name: 'redis_tui' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/mat2cc/redis_tui' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Redis terminal application' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/mat2cc/redis_tui/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install redis_tui' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'redis_tui',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.2.4',
    '0.2.3',
    '0.2.2',
    '0.2.1',
    '0.2.0',
    '0.1.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type RedistuiPackage = typeof redistuiPackage
