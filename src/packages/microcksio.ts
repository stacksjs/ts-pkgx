/**
 * **microcks-cli** - Simple CLI for interacting with Microcks test APIs
 *
 * @domain `microcks.io`
 * @programs `microcks-cli`
 * @version `0.9.0` (6 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install microcks-cli`
 * @aliases `microcks-cli`
 * @dependencies `curl.se/ca-certs`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.microckscli
 * // Or access via domain
 * const samePkg = pantry.microcksio
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "microcks.io"
 * console.log(pkg.description) // "Simple CLI for interacting with Microcks test APIs"
 * console.log(pkg.programs)    // ["microcks-cli"]
 * console.log(pkg.versions[0]) // "0.9.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/microcks-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const microckscliPackage = {
  /**
   * The display name of this package.
   */
  name: 'microcks.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'microcks.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Simple CLI for interacting with Microcks test APIs' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/microcks.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/microcks/microcks-cli' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install microcks-cli' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'microcks-cli',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'curl.se/ca-certs',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.9.0',
    '0.5.8',
    '0.5.7',
    '0.5.6',
    '0.5.5',
    '0.5.4',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'microcks-cli',
  ] as const,
}

export type MicrockscliPackage = typeof microckscliPackage
