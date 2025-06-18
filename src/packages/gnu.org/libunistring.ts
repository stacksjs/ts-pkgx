/**
 * **libunistring** - pkgx package
 *
 * @domain `gnu.org/libunistring`
 * @version `1.3.0` (3 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +gnu.org/libunistring -- $SHELL -i`
 * @dependencies `gnu.org/gmp`, `gnu.org/m4`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gnuorglibunistring
 * console.log(pkg.name)        // "libunistring"
 * console.log(pkg.versions[0]) // "1.3.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/libunistring.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gnuorglibunistringPackage = {
  /**
   * The display name of this package.
   */
  name: 'libunistring' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnu.org/libunistring' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/libunistring/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +gnu.org/libunistring -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnu.org/gmp',
    'gnu.org/m4',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.3.0',
    '1.2.0',
    '1.1.0',
  ] as const,
  aliases: [] as const,
}

export type GnuorglibunistringPackage = typeof gnuorglibunistringPackage
