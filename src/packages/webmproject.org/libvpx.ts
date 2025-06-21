/**
 * **libvpx** - Package from pantry: webmproject.org/libvpx
 *
 * @domain `webmproject.org/libvpx`
 *
 * @install `launchpad install webmproject.org/libvpx`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.webmprojectorglibvpx
 * console.log(pkg.name)        // "libvpx"
 * console.log(pkg.description) // "Package from pantry: webmproject.org/libvpx"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/webmproject-org/libvpx.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const webmprojectorglibvpxPackage = {
  /**
   * The display name of this package.
   */
  name: 'libvpx' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'webmproject.org/libvpx' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: webmproject.org/libvpx' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install webmproject.org/libvpx' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/webmproject.org/libvpx/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type WebmprojectorglibvpxPackage = typeof webmprojectorglibvpxPackage
