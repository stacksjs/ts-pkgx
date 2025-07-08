/**
 * **libmicrohttpd** - Package from pantry: gnu.org/libmicrohttpd
 *
 * @domain `gnu.org/libmicrohttpd`
 *
 * @install `launchpad install gnu.org/libmicrohttpd`
 * @dependencies `gnu.org/libunistring^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gnuorglibmicrohttpd
 * console.log(pkg.name)        // "libmicrohttpd"
 * console.log(pkg.description) // "Package from pantry: gnu.org/libmicrohttpd"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/libmicrohttpd.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gnuorglibmicrohttpdPackage = {
  /**
   * The display name of this package.
   */
  name: 'libmicrohttpd' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnu.org/libmicrohttpd' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: gnu.org/libmicrohttpd' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gnu.org/libmicrohttpd' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +gnu.org/libmicrohttpd -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gnu.org/libmicrohttpd' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnu.org/libunistring^1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/libmicrohttpd/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GnuorglibmicrohttpdPackage = typeof gnuorglibmicrohttpdPackage
