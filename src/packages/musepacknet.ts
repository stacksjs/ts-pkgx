/**
 * **musepack.net** - Package from pantry: musepack.net
 *
 * @domain `musepack.net`
 *
 * @install `launchpad install musepack.net`
 * @dependencies `musepack.net/libreplaygain`, `musepack.net/libcuefile`, `cmake.org`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.musepacknet
 * console.log(pkg.name)        // "musepack.net"
 * console.log(pkg.description) // "Package from pantry: musepack.net"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/musepack-net.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const musepacknetPackage = {
  /**
   * The display name of this package.
   */
  name: 'musepack.net' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'musepack.net' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: musepack.net' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install musepack.net' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'musepack.net/libreplaygain',
    'musepack.net/libcuefile',
    'cmake.org',
    'curl.se',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/musepack.net/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type MusepacknetPackage = typeof musepacknetPackage
