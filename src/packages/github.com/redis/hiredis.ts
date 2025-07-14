/**
 * **hiredis** - Package from pantry: github.com/redis/hiredis
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
 * console.log(pkg.name)        // "hiredis"
 * console.log(pkg.description) // "Package from pantry: github.com/redis/hiredis"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/redis/hiredis.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomredishiredisPackage = {
  /**
   * The display name of this package.
   */
  name: 'hiredis' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/redis/hiredis' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/redis/hiredis' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/redis/hiredis' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/redis/hiredis -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/redis/hiredis' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/redis/hiredis/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomredishiredisPackage = typeof githubcomredishiredisPackage
