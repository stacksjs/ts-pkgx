/**
 * **libmicrohttpd** - pkgx package
 *
 * @domain `gnu.org/libmicrohttpd`
 * @version `1.0.1` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +gnu.org/libmicrohttpd -- $SHELL -i`
 * @dependencies `gnu.org/libunistring^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gnuorglibmicrohttpd
 * console.log(pkg.name)        // "libmicrohttpd"
 * console.log(pkg.versions[0]) // "1.0.1" (latest)
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
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/libmicrohttpd/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +gnu.org/libmicrohttpd -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnu.org/libunistring^1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.0.1',
  ] as const,
  aliases: [] as const,
}

export type GnuorglibmicrohttpdPackage = typeof gnuorglibmicrohttpdPackage
