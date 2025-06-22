/**
 * **nginx.org** - Package from pantry: nginx.org
 *
 * @domain `nginx.org`
 *
 * @install `launchpad install nginx.org`
 * @dependencies `pcre.org^8.45 # switch to pcre.org/pcre2 once it`, `zlib.net^1.2.13`, `openssl.org^1.1.1k`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.nginxorg
 * console.log(pkg.name)        // "nginx.org"
 * console.log(pkg.description) // "Package from pantry: nginx.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/nginx-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const nginxorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'nginx.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'nginx.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: nginx.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install nginx.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +nginx.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install nginx.org' as const,
  programs: [] as const,
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
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/nginx.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type NginxorgPackage = typeof nginxorgPackage
