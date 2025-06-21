/**
 * **minizip** - Package from pantry: zlib.net/minizip
 *
 * @domain `zlib.net/minizip`
 *
 * @install `launchpad install zlib.net/minizip`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.zlibnetminizip
 * console.log(pkg.name)        // "minizip"
 * console.log(pkg.description) // "Package from pantry: zlib.net/minizip"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/zlib-net/minizip.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const zlibnetminizipPackage = {
  /**
   * The display name of this package.
   */
  name: 'minizip' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'zlib.net/minizip' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: zlib.net/minizip' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install zlib.net/minizip' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/zlib.net/minizip/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type ZlibnetminizipPackage = typeof zlibnetminizipPackage
