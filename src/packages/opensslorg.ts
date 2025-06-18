/**
 * **openssl.org** - Package from pantry: openssl.org
 *
 * @domain `openssl.org`
 *
 * @install `launchpad install openssl.org`
 * @dependencies `curl.se/ca-certs`, `perl.org^5`, `pkgx.sh^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.opensslorg
 * console.log(pkg.name)        // "openssl.org"
 * console.log(pkg.description) // "Package from pantry: openssl.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/openssl-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const opensslorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'openssl.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'openssl.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: openssl.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install openssl.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'curl.se/ca-certs',
    'perl.org^5',
    'pkgx.sh^1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/openssl.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type OpensslorgPackage = typeof opensslorgPackage
