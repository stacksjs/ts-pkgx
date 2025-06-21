/**
 * **xv** - Package from pantry: x.org/xv
 *
 * @domain `x.org/xv`
 *
 * @install `launchpad install x.org/xv`
 * @dependencies `x.org/x11`, `x.org/protocol`, `x.org/exts`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.xorgxv
 * console.log(pkg.name)        // "xv"
 * console.log(pkg.description) // "Package from pantry: x.org/xv"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/x-org/xv.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xorgxvPackage = {
  /**
   * The display name of this package.
   */
  name: 'xv' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'x.org/xv' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: x.org/xv' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install x.org/xv' as const,
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
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/x.org/xv/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type XorgxvPackage = typeof xorgxvPackage
