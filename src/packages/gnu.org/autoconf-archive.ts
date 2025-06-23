/**
 * **gnu.org/autoconf-archive** - pkgx package
 *
 * @domain `gnu.org/autoconf-archive`
 * @version `2024.10.16` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install gnu.org/autoconf-archive`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gnuorgautoconfarchive
 * console.log(pkg.name)        // "gnu.org/autoconf-archive"
 * console.log(pkg.versions[0]) // "2024.10.16" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/autoconf-archive.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gnuorgautoconfarchivePackage = {
  /**
   * The display name of this package.
   */
  name: 'gnu.org/autoconf-archive' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnu.org/autoconf-archive' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A collection of more than 500 macros for GNU Autoconf' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/autoconf-archive/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gnu.org/autoconf-archive' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2024.10.16',
    '2023.2.20',
  ] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +gnu.org/autoconf-archive -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gnu.org/autoconf-archive' as const,
}

export type GnuorgautoconfarchivePackage = typeof gnuorgautoconfarchivePackage
