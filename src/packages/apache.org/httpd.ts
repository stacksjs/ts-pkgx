/**
 * **httpd** - Package from pantry: apache.org/httpd
 *
 * @domain `apache.org/httpd`
 *
 * @install `launchpad install apache.org/httpd`
 * @dependencies `apache.org/apr>=1.3.0`, `apache.org/apr-util>=1.3.0`, `github.com/google/brotli`, ... (+6 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.apacheorghttpd
 * console.log(pkg.name)        // "httpd"
 * console.log(pkg.description) // "Package from pantry: apache.org/httpd"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/apache-org/httpd.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const apacheorghttpdPackage = {
  /**
   * The display name of this package.
   */
  name: 'httpd' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'apache.org/httpd' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: apache.org/httpd' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install apache.org/httpd' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +apache.org/httpd -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install apache.org/httpd' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'apache.org/apr>=1.3.0',
    'apache.org/apr-util>=1.3.0',
    'github.com/google/brotli',
    'nghttp2.org',
    'openssl.org',
    'pcre.org/v2',
    'gnome.org/libxml2',
    'zlib.net',
    'libexpat.github.io',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/apache.org/httpd/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type ApacheorghttpdPackage = typeof apacheorghttpdPackage
