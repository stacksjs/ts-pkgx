/**
 * **openresty.org** - Package from pantry: openresty.org
 *
 * @domain `openresty.org`
 *
 * @install `launchpad install openresty.org`
 * @dependencies `pcre.org^8`, `openssl.org^1.1`, `zlib.net^1.2`, ... (+5 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.openrestyorg
 * console.log(pkg.name)        // "openresty.org"
 * console.log(pkg.description) // "Package from pantry: openresty.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/openresty-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const openrestyorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'openresty.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'openresty.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: openresty.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install openresty.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pcre.org^8',
    'openssl.org^1.1',
    'zlib.net^1.2',
    'perl.org',
    'waterlan.home.xs4all.nl/dos2unix',
    'mercurial-scm.org',
    'git-scm.org',
    'gnu.org/wget',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/openresty.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type OpenrestyorgPackage = typeof openrestyorgPackage
