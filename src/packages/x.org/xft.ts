/**
 * **xft** - Package from pantry: x.org/xft
 *
 * @domain `x.org/xft`
 *
 * @install `launchpad install x.org/xft`
 * @dependencies `freedesktop.org/fontconfig^2.14`, `x.org/xrender^0.9`, `sourceware.org/bzip2^1`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.xorgxft
 * console.log(pkg.name)        // "xft"
 * console.log(pkg.description) // "Package from pantry: x.org/xft"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/x-org/xft.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xorgxftPackage = {
  /**
   * The display name of this package.
   */
  name: 'xft' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'x.org/xft' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: x.org/xft' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install x.org/xft' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'freedesktop.org/fontconfig^2.14',
    'x.org/xrender^0.9',
    'sourceware.org/bzip2^1',
    'zlib.net^1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/x.org/xft/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type XorgxftPackage = typeof xorgxftPackage
