/**
 * **ack** - ack is a grep-like search tool optimized for source code.
 *
 * @domain `beyondgrep.com`
 * @programs `ack`
 * @version `3.9.0` (6 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) ack`
 * @name `ack`
 * @dependencies `perl.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.ack
 * // Or access via domain
 * const samePkg = pantry.beyondgrepcom
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "ack"
 * console.log(pkg.description) // "ack is a grep-like search tool optimized for so..."
 * console.log(pkg.programs)    // ["ack"]
 * console.log(pkg.versions[0]) // "3.9.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/beyondgrep-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ackPackage = {
  /**
   * The display name of this package.
   */
  name: 'ack' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'beyondgrep.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'ack is a grep-like search tool optimized for source code.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/beyondgrep.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) ack' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'ack',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'perl.org',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.9.0',
    '3.8.2',
    '3.8.1',
    '3.8.0',
    '3.7.0',
    '3.6.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'ack' as const,
}

export type AckPackage = typeof ackPackage
