/**
 * **hiredis** - Minimalistic C client for Redis >= 1.2
 *
 * @domain `github.com/redis/hiredis`
 * @version `1.3.0` (3 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +github.com/redis/hiredis -- $SHELL -i`
 * @name `hiredis`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.hiredis
 * // Or access via domain
 * const samePkg = pantry.githubcomredishiredis
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "hiredis"
 * console.log(pkg.description) // "Minimalistic C client for Redis >= 1.2"
 * console.log(pkg.versions[0]) // "1.3.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/redis/hiredis.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const hiredisPackage = {
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
  description: 'Minimalistic C client for Redis >= 1.2' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/redis/hiredis/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +github.com/redis/hiredis -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.3.0',
    '1.2.0',
    '1.1.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type HiredisPackage = typeof hiredisPackage
