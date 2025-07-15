/**
 * **xcb-util-keysyms** - Package from pantry: freedesktop.org/xcb-util-keysyms
 *
 * @domain `freedesktop.org/xcb-util-keysyms`
 *
 * @install `launchpad install freedesktop.org/xcb-util-keysyms`
 * @dependencies `x.org/xcb`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.freedesktoporgxcbutilkeysyms
 * console.log(pkg.name)        // "xcb-util-keysyms"
 * console.log(pkg.description) // "Package from pantry: freedesktop.org/xcb-util-k..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/freedesktop-org/xcb-util-keysyms.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const freedesktoporgxcbutilkeysymsPackage = {
  /**
   * The display name of this package.
   */
  name: 'xcb-util-keysyms' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'freedesktop.org/xcb-util-keysyms' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: freedesktop.org/xcb-util-keysyms' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install freedesktop.org/xcb-util-keysyms' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +freedesktop.org/xcb-util-keysyms -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install freedesktop.org/xcb-util-keysyms' as const,
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
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/freedesktop.org/xcb-util-keysyms/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type FreedesktoporgxcbutilkeysymsPackage = typeof freedesktoporgxcbutilkeysymsPackage
