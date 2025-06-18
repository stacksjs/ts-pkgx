/**
 * **libsigsegv** - pkgx package
 *
 * @domain `gnu.org/libsigsegv`
 * @version `2.15.0` (2 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/libsigsegv.md
 *
 * @install `sh <(curl https://pkgx.sh) +gnu.org/libsigsegv -- $SHELL -i`
 * @aliases `libsigsegv`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.libsigsegv
 * // Or access via domain
 * const samePkg = pantry.gnuorglibsigsegv
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "gnu.org/libsigsegv"
 * console.log(pkg.versions[0]) // "2.15.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/libsigsegv.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libsigsegvPackage = {
  /**
   * The display name of this package.
   */
  name: 'gnu.org/libsigsegv' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnu.org/libsigsegv' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from gnu.org/libsigsegv' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/libsigsegv/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +gnu.org/libsigsegv -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.15.0',
    '2.14.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'libsigsegv',
  ] as const,
  fullPath: 'gnu.org/libsigsegv' as const,
}

export type LibsigsegvPackage = typeof libsigsegvPackage
