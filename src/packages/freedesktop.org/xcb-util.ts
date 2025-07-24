/**
 * **xcb-util** - Package from pantry: freedesktop.org/xcb-util
 *
 * @domain `freedesktop.org/xcb-util`
 *
 * @install `launchpad install freedesktop.org/xcb-util`
 * @dependencies `x.org/xcb`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.freedesktoporgxcbutil
 * console.log(pkg.name)        // "xcb-util"
 * console.log(pkg.description) // "Package from pantry: freedesktop.org/xcb-util"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/freedesktop-org/xcb-util.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const freedesktoporgxcbutilPackage = {
  /**
   * The display name of this package.
   */
  name: 'xcb-util' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'freedesktop.org/xcb-util' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: freedesktop.org/xcb-util' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install freedesktop.org/xcb-util' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +freedesktop.org/xcb-util -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install freedesktop.org/xcb-util' as const,
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
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/freedesktop.org/xcb-util/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type FreedesktoporgxcbutilPackage = typeof freedesktoporgxcbutilPackage
