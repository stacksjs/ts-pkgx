/**
 * **nginx** - HTTP(S) server and reverse proxy, and IMAP/POP3 proxy server
 *
 * @domain `nginx.org`
 * @programs `nginx`
 * @version `1.29.0` (19 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install nginx`
 * @name `nginx`
 * @dependencies `pcre.org^8.45 # switch to pcre.org/pcre2 once it`, `zlib.net^1.2.13`, `openssl.org^1.1.1k`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.nginx
 * // Or access via domain
 * const samePkg = pantry.nginxorg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "nginx"
 * console.log(pkg.description) // "HTTP(S) server and reverse proxy, and IMAP/POP3..."
 * console.log(pkg.programs)    // ["nginx"]
 * console.log(pkg.versions[0]) // "1.29.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/nginx-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const nginxPackage = {
  /**
   * The display name of this package.
   */
  name: 'nginx' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'nginx.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'HTTP(S) server and reverse proxy, and IMAP/POP3 proxy server' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/nginx.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install nginx' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'nginx',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pcre.org^8.45 # switch to pcre.org/pcre2 once it',
    'zlib.net^1.2.13',
    'openssl.org^1.1.1k',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.29.0',
    '1.28.0',
    '1.27.5',
    '1.27.4',
    '1.27.3',
    '1.27.2',
    '1.27.1',
    '1.27.0',
    '1.26.2',
    '1.26.1',
    '1.26.0',
    '1.25.5',
    '1.25.4',
    '1.25.3',
    '1.25.2',
    '1.25.1',
    '1.25.0',
    '1.24.0',
    '1.23.3',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) nginx -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install nginx' as const,
}

export type NginxPackage = typeof nginxPackage
