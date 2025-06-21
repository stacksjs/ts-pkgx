/**
 * **libwpe** - Package from pantry: wpewebkit.org/libwpe
 *
 * @domain `wpewebkit.org/libwpe`
 *
 * @install `launchpad install wpewebkit.org/libwpe`
 * @dependencies `xkbcommon.org`, `mesa3d.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.wpewebkitorglibwpe
 * console.log(pkg.name)        // "libwpe"
 * console.log(pkg.description) // "Package from pantry: wpewebkit.org/libwpe"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/wpewebkit-org/libwpe.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const wpewebkitorglibwpePackage = {
  /**
   * The display name of this package.
   */
  name: 'libwpe' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'wpewebkit.org/libwpe' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: wpewebkit.org/libwpe' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install wpewebkit.org/libwpe' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'xkbcommon.org',
    'mesa3d.org',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/wpewebkit.org/libwpe/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type WpewebkitorglibwpePackage = typeof wpewebkitorglibwpePackage
