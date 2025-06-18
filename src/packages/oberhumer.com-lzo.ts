/**
 * **lzo** - pkgx package
 *
 * @domain `oberhumer.com/lzo`
 * @version `2.10.0` (1 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/oberhumer-com/lzo.md
 *
 * @install `sh <(curl https://pkgx.sh) +oberhumer.com/lzo -- $SHELL -i`
 * @aliases `lzo`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.lzo
 * // Or access via domain
 * const samePkg = pantry.oberhumercomlzo
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "oberhumer.com/lzo"
 * console.log(pkg.versions[0]) // "2.10.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/oberhumer-com/lzo.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const lzoPackage = {
  /**
   * The display name of this package.
   */
  name: 'oberhumer.com/lzo' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'oberhumer.com/lzo' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/oberhumer.com/lzo/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +oberhumer.com/lzo -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.10.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'lzo',
  ] as const,
  fullPath: 'oberhumer.com/lzo' as const,
}

export type LzoPackage = typeof lzoPackage
