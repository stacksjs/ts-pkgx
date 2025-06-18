/**
 * **libreplaygain** - pkgx package
 *
 * @domain `musepack.net/libreplaygain`
 * @version `475.0.0` (1 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/musepack-net/libreplaygain.md
 *
 * @install `sh <(curl https://pkgx.sh) +musepack.net/libreplaygain -- $SHELL -i`
 * @aliases `libreplaygain`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.libreplaygain
 * // Or access via domain
 * const samePkg = pantry.musepacknetlibreplaygain
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "musepack.net/libreplaygain"
 * console.log(pkg.versions[0]) // "475.0.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/musepack-net/libreplaygain.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libreplaygainPackage = {
  /**
   * The display name of this package.
   */
  name: 'musepack.net/libreplaygain' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'musepack.net/libreplaygain' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/musepack.net/libreplaygain/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +musepack.net/libreplaygain -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '475.0.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'libreplaygain',
  ] as const,
  fullPath: 'musepack.net/libreplaygain' as const,
}

export type LibreplaygainPackage = typeof libreplaygainPackage
