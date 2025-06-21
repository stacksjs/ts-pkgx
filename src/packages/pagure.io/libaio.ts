/**
 * **libaio** - Package from pantry: pagure.io/libaio
 *
 * @domain `pagure.io/libaio`
 *
 * @install `launchpad install pagure.io/libaio`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.pagureiolibaio
 * console.log(pkg.name)        // "libaio"
 * console.log(pkg.description) // "Package from pantry: pagure.io/libaio"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pagure-io/libaio.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pagureiolibaioPackage = {
  /**
   * The display name of this package.
   */
  name: 'libaio' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'pagure.io/libaio' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: pagure.io/libaio' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install pagure.io/libaio' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/pagure.io/libaio/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type PagureiolibaioPackage = typeof pagureiolibaioPackage
