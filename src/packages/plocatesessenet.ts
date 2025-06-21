/**
 * **plocate.sesse.net** - Package from pantry: plocate.sesse.net
 *
 * @domain `plocate.sesse.net`
 *
 * @install `launchpad install plocate.sesse.net`
 * @dependencies `facebook.com/zstd@1`, `gnu.org/gcc/libstdcxx@14`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.plocatesessenet
 * console.log(pkg.name)        // "plocate.sesse.net"
 * console.log(pkg.description) // "Package from pantry: plocate.sesse.net"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/plocate-sesse-net.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const plocatesessenetPackage = {
  /**
   * The display name of this package.
   */
  name: 'plocate.sesse.net' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'plocate.sesse.net' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: plocate.sesse.net' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install plocate.sesse.net' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'facebook.com/zstd@1',
    'gnu.org/gcc/libstdcxx@14',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/plocate.sesse.net/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type PlocatesessenetPackage = typeof plocatesessenetPackage
