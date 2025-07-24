/**
 * **sanitize** - A simple directory sanitizer, written in rust.
 *
 * @domain `crates.io/sanitize`
 * @programs `sanitize`
 * @version `0.1.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install sanitize`
 * @name `sanitize`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.sanitize
 * // Or access via domain
 * const samePkg = pantry.cratesiosanitize
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "sanitize"
 * console.log(pkg.description) // "A simple directory sanitizer, written in rust."
 * console.log(pkg.programs)    // ["sanitize"]
 * console.log(pkg.versions[0]) // "0.1.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/sanitize.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const sanitizePackage = {
  /**
   * The display name of this package.
   */
  name: 'sanitize' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/sanitize' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A simple directory sanitizer, written in rust.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/sanitize/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install sanitize' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'sanitize',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.1.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) sanitize -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install sanitize' as const,
}

export type SanitizePackage = typeof sanitizePackage
