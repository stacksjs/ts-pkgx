/**
 * **caddy** - Fast and extensible multi-platform HTTP/1-2-3 web server with automatic HTTPS
 *
 * @domain `caddyserver.com`
 * @programs `caddy`
 * @version `2.10.0` (10 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) caddy`
 * @name `caddy`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.caddy
 * // Or access via domain
 * const samePkg = pantry.caddyservercom
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "caddy"
 * console.log(pkg.description) // "Fast and extensible multi-platform HTTP/1-2-3 w..."
 * console.log(pkg.programs)    // ["caddy"]
 * console.log(pkg.versions[0]) // "2.10.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/caddyserver-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const caddyPackage = {
  /**
   * The display name of this package.
   */
  name: 'caddy' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'caddyserver.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Fast and extensible multi-platform HTTP/1-2-3 web server with automatic HTTPS' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/caddyserver.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) caddy' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'caddy',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.10.0',
    '2.9.1',
    '2.9.0',
    '2.8.4',
    '2.8.2',
    '2.8.1',
    '2.8.0',
    '2.7.6',
    '2.7.5',
    '2.7.4',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'caddyserver.com' as const,
}

export type CaddyPackage = typeof caddyPackage
