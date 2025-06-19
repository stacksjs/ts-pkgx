/**
 * **direnv** - Load/unload environment variables based on $PWD
 *
 * @domain `direnv.net`
 * @programs `direnv`
 * @version `2.36.0` (6 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install direnv`
 * @aliases `direnv`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.direnv
 * // Or access via domain
 * const samePkg = pantry.direnvnet
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "direnv.net"
 * console.log(pkg.description) // "Load/unload environment variables based on $PWD"
 * console.log(pkg.programs)    // ["direnv"]
 * console.log(pkg.versions[0]) // "2.36.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/direnv-net.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const direnvPackage = {
  /**
   * The display name of this package.
   */
  name: 'direnv.net' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'direnv.net' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Load/unload environment variables based on $PWD' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/direnv.net/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install direnv' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'direnv',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.36.0',
    '2.35.0',
    '2.34.0',
    '2.33.0',
    '2.32.3',
    '2.32.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'direnv',
  ] as const,
}

export type DirenvPackage = typeof direnvPackage
