/**
 * **redis_tui** - Package from pantry: github.com/mat2cc/redis_tui
 *
 * @domain `github.com/mat2cc/redis_tui`
 *
 * @install `launchpad install github.com/mat2cc/redis_tui`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcommat2ccredis_tui
 * console.log(pkg.name)        // "redis_tui"
 * console.log(pkg.description) // "Package from pantry: github.com/mat2cc/redis_tui"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/mat2cc/redis_tui.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcommat2ccredis_tuiPackage = {
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
  description: 'Package from pantry: github.com/mat2cc/redis_tui' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/mat2cc/redis_tui' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/mat2cc/redis_tui -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/mat2cc/redis_tui' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/mat2cc/redis_tui/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Githubcommat2ccredis_tuiPackage = typeof githubcommat2ccredis_tuiPackage
