/**
 * **ucl** - pkgx package
 *
 * @domain `oberhumer.com/ucl`
 * @version `1.3.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +oberhumer.com/ucl -- $SHELL -i`
 * @aliases `ucl`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.ucl
 * // Or access via domain
 * const samePkg = pantry.oberhumercomucl
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "oberhumer.com/ucl"
 * console.log(pkg.versions[0]) // "1.3.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/oberhumer-com/ucl.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const uclPackage = {
  /**
   * The display name of this package.
   */
  name: 'oberhumer.com/ucl' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'oberhumer.com/ucl' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/oberhumer.com/ucl/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +oberhumer.com/ucl -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.3.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'ucl',
  ] as const,
  fullPath: 'oberhumer.com/ucl' as const,
}

export type UclPackage = typeof uclPackage
