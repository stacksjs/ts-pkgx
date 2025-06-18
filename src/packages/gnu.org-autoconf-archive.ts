/**
 * **autoconf-archive** - pkgx package
 *
 * @domain `gnu.org/autoconf-archive`
 * @version `2024.10.16` (2 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/autoconf-archive.md
 *
 * @install `sh <(curl https://pkgx.sh) +gnu.org/autoconf-archive -- $SHELL -i`
 * @aliases `autoconf-archive`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.autoconfarchive
 * // Or access via domain
 * const samePkg = pantry.gnuorgautoconfarchive
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "gnu.org/autoconf-archive"
 * console.log(pkg.versions[0]) // "2024.10.16" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/autoconf-archive.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const autoconfarchivePackage = {
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
  description: 'A package from gnu.org/autoconf-archive' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/autoconf-archive/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +gnu.org/autoconf-archive -- $SHELL -i' as const,
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
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'autoconf-archive',
  ] as const,
  fullPath: 'gnu.org/autoconf-archive' as const,
}

export type AutoconfarchivePackage = typeof autoconfarchivePackage
