/**
 * **neon-config** - neon - an HTTP/1.1 and WebDAV client library with a C API
 *
 * @domain `notroj.github.io/neon`
 * @programs `neon-config`
 * @version `0.34.2` (5 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install neon-config`
 * @aliases `neon-config`
 * @dependencies `openssl.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.neonconfig
 * // Or access via domain
 * const samePkg = pantry.notrojgithubioneon
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "neon"
 * console.log(pkg.description) // "neon - an HTTP/1.1 and WebDAV client library wi..."
 * console.log(pkg.programs)    // ["neon-config"]
 * console.log(pkg.versions[0]) // "0.34.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/notroj-github-io/neon.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const neonconfigPackage = {
  /**
   * The display name of this package.
   */
  name: 'neon' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'notroj.github.io/neon' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'neon - an HTTP/1.1 and WebDAV client library with a C API' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/notroj.github.io/neon/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install neon-config' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'neon-config',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.34.2',
    '0.34.1',
    '0.34.0',
    '0.33.0',
    '0.32.5',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'neon-config',
  ] as const,
}

export type NeonconfigPackage = typeof neonconfigPackage
