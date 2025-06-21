/**
 * **xinput** - Package from pantry: x.org/xinput
 *
 * @domain `x.org/xinput`
 *
 * @install `launchpad install x.org/xinput`
 * @dependencies `x.org/x11`, `x.org/exts`, `x.org/xi`, ... (+2 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.xorgxinput
 * console.log(pkg.name)        // "xinput"
 * console.log(pkg.description) // "Package from pantry: x.org/xinput"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/x-org/xinput.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xorgxinputPackage = {
  /**
   * The display name of this package.
   */
  name: 'xinput' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'x.org/xinput' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: x.org/xinput' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install x.org/xinput' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'x.org/x11',
    'x.org/exts',
    'x.org/xi',
    'x.org/xinerama',
    'x.org/xrandr',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/x.org/xinput/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type XorgxinputPackage = typeof xorgxinputPackage
