/**
 * **zlib.net** - Package from pantry: zlib.net
 *
 * @domain `zlib.net`
 *
 * @install `launchpad install zlib.net`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.zlibnet
 * console.log(pkg.name)        // "zlib.net"
 * console.log(pkg.description) // "Package from pantry: zlib.net"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/zlib-net.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const zlibnetPackage = {
  /**
   * The display name of this package.
   */
  name: 'zlib.net' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'zlib.net' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: zlib.net' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install zlib.net' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/zlib.net/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type ZlibnetPackage = typeof zlibnetPackage
