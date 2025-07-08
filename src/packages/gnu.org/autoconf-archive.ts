/**
 * **autoconf-archive** - Package from pantry: gnu.org/autoconf-archive
 *
 * @domain `gnu.org/autoconf-archive`
 *
 * @install `launchpad install gnu.org/autoconf-archive`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gnuorgautoconfarchive
 * console.log(pkg.name)        // "autoconf-archive"
 * console.log(pkg.description) // "Package from pantry: gnu.org/autoconf-archive"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/autoconf-archive.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gnuorgautoconfarchivePackage = {
  /**
   * The display name of this package.
   */
  name: 'autoconf-archive' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnu.org/autoconf-archive' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: gnu.org/autoconf-archive' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gnu.org/autoconf-archive' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +gnu.org/autoconf-archive -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gnu.org/autoconf-archive' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/autoconf-archive/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GnuorgautoconfarchivePackage = typeof gnuorgautoconfarchivePackage
