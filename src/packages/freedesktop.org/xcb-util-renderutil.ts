/**
 * **xcb-util-renderutil** - Package from pantry: freedesktop.org/xcb-util-renderutil
 *
 * @domain `freedesktop.org/xcb-util-renderutil`
 *
 * @install `launchpad install freedesktop.org/xcb-util-renderutil`
 * @dependencies `x.org/xcb`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.freedesktoporgxcbutilrenderutil
 * console.log(pkg.name)        // "xcb-util-renderutil"
 * console.log(pkg.description) // "Package from pantry: freedesktop.org/xcb-util-r..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/freedesktop-org/xcb-util-renderutil.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const freedesktoporgxcbutilrenderutilPackage = {
  /**
   * The display name of this package.
   */
  name: 'xcb-util-renderutil' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'freedesktop.org/xcb-util-renderutil' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: freedesktop.org/xcb-util-renderutil' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install freedesktop.org/xcb-util-renderutil' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +freedesktop.org/xcb-util-renderutil -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install freedesktop.org/xcb-util-renderutil' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'x.org/xcb',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/freedesktop.org/xcb-util-renderutil/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type FreedesktoporgxcbutilrenderutilPackage = typeof freedesktoporgxcbutilrenderutilPackage
