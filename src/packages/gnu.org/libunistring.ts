/**
 * **libunistring** - Package from pantry: gnu.org/libunistring
 *
 * @domain `gnu.org/libunistring`
 *
 * @install `launchpad install gnu.org/libunistring`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gnuorglibunistring
 * console.log(pkg.name)        // "libunistring"
 * console.log(pkg.description) // "Package from pantry: gnu.org/libunistring"
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
  description: 'Package from pantry: gnu.org/libunistring' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gnu.org/libunistring' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +gnu.org/libunistring -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gnu.org/libunistring' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/libunistring/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GnuorglibunistringPackage = typeof gnuorglibunistringPackage
