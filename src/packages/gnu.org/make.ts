/**
 * **make** - Package from pantry: gnu.org/make
 *
 * @domain `gnu.org/make`
 *
 * @install `launchpad install gnu.org/make`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gnuorgmake
 * console.log(pkg.name)        // "make"
 * console.log(pkg.description) // "Package from pantry: gnu.org/make"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/make.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gnuorgmakePackage = {
  /**
   * The display name of this package.
   */
  name: 'make' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnu.org/make' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: gnu.org/make' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gnu.org/make' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +gnu.org/make -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gnu.org/make' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/make/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GnuorgmakePackage = typeof gnuorgmakePackage
