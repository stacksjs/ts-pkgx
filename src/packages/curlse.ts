/**
 * **curl.se** - Package from pantry: curl.se
 *
 * @domain `curl.se`
 *
 * @install `launchpad install curl.se`
 * @dependencies `openssl.org^1.1`, `curl.se/ca-certs`, `zlib.net^1.2.11`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.curlse
 * console.log(pkg.name)        // "curl.se"
 * console.log(pkg.description) // "Package from pantry: curl.se"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/curl-se.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const curlsePackage = {
  /**
   * The display name of this package.
   */
  name: 'curl.se' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'curl.se' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: curl.se' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install curl.se' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +curl.se -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install curl.se' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org^1.1',
    'curl.se/ca-certs',
    'zlib.net^1.2.11',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/curl.se/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CurlsePackage = typeof curlsePackage
