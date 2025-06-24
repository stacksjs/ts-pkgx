/**
 * **xcb-util-wm** - Package from pantry: freedesktop.org/xcb-util-wm
 *
 * @domain `freedesktop.org/xcb-util-wm`
 *
 * @install `launchpad install freedesktop.org/xcb-util-wm`
 * @dependencies `x.org/xcb`, `gnu.org/m4`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.freedesktoporgxcbutilwm
 * console.log(pkg.name)        // "xcb-util-wm"
 * console.log(pkg.description) // "Package from pantry: freedesktop.org/xcb-util-wm"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/freedesktop-org/xcb-util-wm.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const freedesktoporgxcbutilwmPackage = {
  /**
   * The display name of this package.
   */
  name: 'xcb-util-wm' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'freedesktop.org/xcb-util-wm' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: freedesktop.org/xcb-util-wm' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install freedesktop.org/xcb-util-wm' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +freedesktop.org/xcb-util-wm -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install freedesktop.org/xcb-util-wm' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'x.org/xcb',
    'gnu.org/m4',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/freedesktop.org/xcb-util-wm/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type FreedesktoporgxcbutilwmPackage = typeof freedesktoporgxcbutilwmPackage
