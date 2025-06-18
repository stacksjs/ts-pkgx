/**
 * **sdkman.io** - Package from pantry: sdkman.io
 *
 * @domain `sdkman.io`
 *
 * @install `launchpad install sdkman.io`
 * @dependencies `curl.se`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.sdkmanio
 * console.log(pkg.name)        // "sdkman.io"
 * console.log(pkg.description) // "Package from pantry: sdkman.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/sdkman-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const sdkmanioPackage = {
  /**
   * The display name of this package.
   */
  name: 'sdkman.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'sdkman.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: sdkman.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install sdkman.io' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'curl.se',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/sdkman.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type SdkmanioPackage = typeof sdkmanioPackage
