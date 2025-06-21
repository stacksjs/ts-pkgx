/**
 * **xkbfile** - Package from pantry: x.org/xkbfile
 *
 * @domain `x.org/xkbfile`
 *
 * @install `launchpad install x.org/xkbfile`
 * @dependencies `x.org/x11`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.xorgxkbfile
 * console.log(pkg.name)        // "xkbfile"
 * console.log(pkg.description) // "Package from pantry: x.org/xkbfile"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/x-org/xkbfile.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xorgxkbfilePackage = {
  /**
   * The display name of this package.
   */
  name: 'xkbfile' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'x.org/xkbfile' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: x.org/xkbfile' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install x.org/xkbfile' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'x.org/x11',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/x.org/xkbfile/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type XorgxkbfilePackage = typeof xorgxkbfilePackage
