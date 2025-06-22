/**
 * **x11** - Package from pantry: x.org/x11
 *
 * @domain `x.org/x11`
 *
 * @install `launchpad install x.org/x11`
 * @dependencies `x.org/xcb^1`, `x.org/protocol`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.xorgx11
 * console.log(pkg.name)        // "x11"
 * console.log(pkg.description) // "Package from pantry: x.org/x11"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/x-org/x11.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xorgx11Package = {
  /**
   * The display name of this package.
   */
  name: 'x11' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'x.org/x11' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: x.org/x11' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install x.org/x11' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +x.org/x11 -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install x.org/x11' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'x.org/xcb^1',
    'x.org/protocol',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/x.org/x11/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Xorgx11Package = typeof xorgx11Package
