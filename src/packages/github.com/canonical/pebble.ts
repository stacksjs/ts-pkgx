/**
 * **pebble** - Pebble is a lightweight Linux service manager with layered configuration and an HTTP API.
 *
 * @domain `github.com/canonical/pebble`
 * @programs `pebble`
 * @version `1.22.2` (31 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) pebble`
 * @name `canonical/pebble`
 * @aliases `pebble`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.pebble
 * // Or access via domain
 * const samePkg = pantry.githubcomcanonicalpebble
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "canonical/pebble"
 * console.log(pkg.description) // "Pebble is a lightweight Linux service manager w..."
 * console.log(pkg.programs)    // ["pebble"]
 * console.log(pkg.versions[0]) // "1.22.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/canonical/pebble.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pebblePackage = {
  /**
   * The display name of this package.
   */
  name: 'canonical/pebble' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/canonical/pebble' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Pebble is a lightweight Linux service manager with layered configuration and an HTTP API.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/canonical/pebble/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) pebble' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'pebble',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.22.2',
    '1.22.1',
    '1.22.0',
    '1.21.0',
    '1.20.0',
    '1.19.2',
    '1.19.1',
    '1.19.0',
    '1.18.0',
    '1.17.0',
    '1.16.0',
    '1.15.0',
    '1.14.1',
    '1.14.0',
    '1.13.0',
    '1.12.0',
    '1.11.0',
    '1.10.2',
    '1.10.1',
    '1.10.0',
    '1.9.1',
    '1.9.0',
    '1.8.0',
    '1.7.4',
    '1.7.3',
    '1.7.2',
    '1.7.1',
    '1.7.0',
    '1.4.2',
    '1.4.1',
    '1.1.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'pebble',
  ] as const,
  fullPath: 'github.com/canonical/pebble' as const,
}

export type PebblePackage = typeof pebblePackage
