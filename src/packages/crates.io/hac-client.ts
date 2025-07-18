/**
 * **hac** - A terminal API Client that comes in handy. // Lightweight alternative to postman
 *
 * @domain `crates.io/hac-client`
 * @programs `hac`
 * @version `0.2.1` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install hac`
 * @name `hac`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.hac
 * // Or access via domain
 * const samePkg = pantry.cratesiohacclient
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "hac"
 * console.log(pkg.description) // "A terminal API Client that comes in handy. // L..."
 * console.log(pkg.programs)    // ["hac"]
 * console.log(pkg.versions[0]) // "0.2.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/hac-client.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const hacPackage = {
  /**
   * The display name of this package.
   */
  name: 'hac' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/hac-client' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A terminal API Client that comes in handy. // Lightweight alternative to postman' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/hac-client/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install hac' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'hac',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.2.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) hac -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install hac' as const,
}

export type HacPackage = typeof hacPackage
