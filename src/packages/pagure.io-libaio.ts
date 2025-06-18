/**
 * **libaio** - pkgx package
 *
 * @domain `pagure.io/libaio`
 * @version `0.3.113` (1 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/pagure-io/libaio.md
 *
 * @install `sh <(curl https://pkgx.sh) +pagure.io/libaio -- $SHELL -i`
 * @aliases `libaio`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.libaio
 * // Or access via domain
 * const samePkg = pantry.pagureiolibaio
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "pagure.io/libaio"
 * console.log(pkg.versions[0]) // "0.3.113" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pagure-io/libaio.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libaioPackage = {
  /**
   * The display name of this package.
   */
  name: 'pagure.io/libaio' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'pagure.io/libaio' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from pagure.io/libaio' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/pagure.io/libaio/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +pagure.io/libaio -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.3.113',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'libaio',
  ] as const,
  fullPath: 'pagure.io/libaio' as const,
}

export type LibaioPackage = typeof libaioPackage
