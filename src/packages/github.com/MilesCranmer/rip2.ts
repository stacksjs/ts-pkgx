/**
 * **rip** - A safe and ergonomic alternative to rm
 *
 * @domain `github.com/MilesCranmer/rip2`
 * @programs `rip`
 * @version `0.9.5` (6 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install rip`
 * @name `rip2`
 * @aliases `rip`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.rip
 * // Or access via domain
 * const samePkg = pantry.githubcommilescranmerrip2
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "rip2"
 * console.log(pkg.description) // "A safe and ergonomic alternative to rm"
 * console.log(pkg.programs)    // ["rip"]
 * console.log(pkg.versions[0]) // "0.9.5" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/MilesCranmer/rip2.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ripPackage = {
  /**
   * The display name of this package.
   */
  name: 'rip2' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/MilesCranmer/rip2' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A safe and ergonomic alternative to rm' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/MilesCranmer/rip2/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install rip' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'rip',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.9.5',
    '0.9.4',
    '0.9.3',
    '0.9.2',
    '0.9.1',
    '0.9.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'rip',
  ] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) rip -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install rip' as const,
}

export type RipPackage = typeof ripPackage
