/**
 * **libnl** - Netlink Library Suite
 *
 * @domain `github.com/thom311/libnl`
 * @version `3.11.0` (5 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +github.com/thom311/libnl -- $SHELL -i`
 * @name `libnl`
 * @aliases `thom311/libnl`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.libnl
 * // Or access via domain
 * const samePkg = pantry.githubcomthom311libnl
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "libnl"
 * console.log(pkg.description) // "Netlink Library Suite"
 * console.log(pkg.versions[0]) // "3.11.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/thom311/libnl.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libnlPackage = {
  /**
   * The display name of this package.
   */
  name: 'libnl' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/thom311/libnl' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Netlink Library Suite' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/thom311/libnl/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +github.com/thom311/libnl -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.11.0',
    '3.10.0',
    '3.9.0',
    '3.8.0',
    '3.7.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'thom311/libnl',
  ] as const,
  fullPath: 'github.com/thom311/libnl' as const,
}

export type LibnlPackage = typeof libnlPackage
