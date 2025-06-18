/**
 * **nghttp2.org** - Package from pantry: nghttp2.org
 *
 * @domain `nghttp2.org`
 *
 * @install `launchpad install nghttp2.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.nghttp2org
 * console.log(pkg.name)        // "nghttp2.org"
 * console.log(pkg.description) // "Package from pantry: nghttp2.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/nghttp2-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const nghttp2orgPackage = {
  /**
   * The display name of this package.
   */
  name: 'nghttp2.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'nghttp2.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: nghttp2.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install nghttp2.org' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/nghttp2.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Nghttp2orgPackage = typeof nghttp2orgPackage
