/**
 * **xkbcommon.org** - Package from pantry: xkbcommon.org
 *
 * @domain `xkbcommon.org`
 *
 * @install `launchpad install xkbcommon.org`
 * @dependencies `x.org/x11`, `x.org/xcb`, `freedesktop.org/XKeyboardConfig`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.xkbcommonorg
 * console.log(pkg.name)        // "xkbcommon.org"
 * console.log(pkg.description) // "Package from pantry: xkbcommon.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/xkbcommon-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xkbcommonorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'xkbcommon.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'xkbcommon.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: xkbcommon.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install xkbcommon.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'x.org/x11',
    'x.org/xcb',
    'freedesktop.org/XKeyboardConfig',
    'gnome.org/libxml2',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/xkbcommon.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type XkbcommonorgPackage = typeof xkbcommonorgPackage
