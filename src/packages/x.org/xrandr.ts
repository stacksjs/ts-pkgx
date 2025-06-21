/**
 * **xrandr** - Package from pantry: x.org/xrandr
 *
 * @domain `x.org/xrandr`
 *
 * @install `launchpad install x.org/xrandr`
 * @dependencies `x.org/x11`, `x.org/protocol`, `x.org/exts`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.xorgxrandr
 * console.log(pkg.name)        // "xrandr"
 * console.log(pkg.description) // "Package from pantry: x.org/xrandr"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/x-org/xrandr.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xorgxrandrPackage = {
  /**
   * The display name of this package.
   */
  name: 'xrandr' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'x.org/xrandr' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: x.org/xrandr' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install x.org/xrandr' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'x.org/x11',
    'x.org/protocol',
    'x.org/exts',
    'x.org/xrender',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/x.org/xrandr/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type XorgxrandrPackage = typeof xorgxrandrPackage
