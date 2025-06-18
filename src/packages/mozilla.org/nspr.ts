/**
 * **nspr-config** - Platform-neutral API for system-level and libc-like functions
 *
 * @domain `mozilla.org/nspr`
 * @programs `nspr-config`
 * @version `4.34.1` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install nspr-config`
 * @aliases `nspr-config`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.nsprconfig
 * // Or access via domain
 * const samePkg = pantry.mozillaorgnspr
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "nspr"
 * console.log(pkg.description) // "Platform-neutral API for system-level and libc-..."
 * console.log(pkg.programs)    // ["nspr-config"]
 * console.log(pkg.versions[0]) // "4.34.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/mozilla-org/nspr.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const nsprconfigPackage = {
  /**
   * The display name of this package.
   */
  name: 'nspr' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'mozilla.org/nspr' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Platform-neutral API for system-level and libc-like functions' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/mozilla.org/nspr/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install nspr-config' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'nspr-config',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '4.34.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'nspr-config',
  ] as const,
}

export type NsprconfigPackage = typeof nsprconfigPackage
