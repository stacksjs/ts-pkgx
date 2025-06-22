/**
 * **trurl** - Package from pantry: curl.se/trurl
 *
 * @domain `curl.se/trurl`
 *
 * @install `launchpad install curl.se/trurl`
 * @dependencies `curl.se^7,^8`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.curlsetrurl
 * console.log(pkg.name)        // "trurl"
 * console.log(pkg.description) // "Package from pantry: curl.se/trurl"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/curl-se/trurl.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const curlsetrurlPackage = {
  /**
   * The display name of this package.
   */
  name: 'trurl' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'curl.se/trurl' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: curl.se/trurl' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install curl.se/trurl' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +curl.se/trurl -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install curl.se/trurl' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'curl.se^7,^8',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/curl.se/trurl/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CurlsetrurlPackage = typeof curlsetrurlPackage
