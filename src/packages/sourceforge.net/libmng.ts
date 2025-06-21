/**
 * **libmng** - Package from pantry: sourceforge.net/libmng
 *
 * @domain `sourceforge.net/libmng`
 *
 * @install `launchpad install sourceforge.net/libmng`
 * @dependencies `libjpeg-turbo.org`, `littlecms.com>=2.0.0`, `zlib.net`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.sourceforgenetlibmng
 * console.log(pkg.name)        // "libmng"
 * console.log(pkg.description) // "Package from pantry: sourceforge.net/libmng"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/sourceforge-net/libmng.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const sourceforgenetlibmngPackage = {
  /**
   * The display name of this package.
   */
  name: 'libmng' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'sourceforge.net/libmng' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: sourceforge.net/libmng' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install sourceforge.net/libmng' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'libjpeg-turbo.org',
    'littlecms.com>=2.0.0',
    'zlib.net',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/sourceforge.net/libmng/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type SourceforgenetlibmngPackage = typeof sourceforgenetlibmngPackage
