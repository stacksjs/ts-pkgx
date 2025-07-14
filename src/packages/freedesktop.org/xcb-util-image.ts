/**
 * **xcb-util-image** - Package from pantry: freedesktop.org/xcb-util-image
 *
 * @domain `freedesktop.org/xcb-util-image`
 *
 * @install `launchpad install freedesktop.org/xcb-util-image`
 * @dependencies `x.org/xcb`, `freedesktop.org/xcb-util`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.freedesktoporgxcbutilimage
 * console.log(pkg.name)        // "xcb-util-image"
 * console.log(pkg.description) // "Package from pantry: freedesktop.org/xcb-util-i..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/freedesktop-org/xcb-util-image.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const freedesktoporgxcbutilimagePackage = {
  /**
   * The display name of this package.
   */
  name: 'xcb-util-image' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'freedesktop.org/xcb-util-image' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: freedesktop.org/xcb-util-image' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install freedesktop.org/xcb-util-image' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +freedesktop.org/xcb-util-image -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install freedesktop.org/xcb-util-image' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'x.org/xcb',
    'freedesktop.org/xcb-util',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/freedesktop.org/xcb-util-image/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type FreedesktoporgxcbutilimagePackage = typeof freedesktoporgxcbutilimagePackage
