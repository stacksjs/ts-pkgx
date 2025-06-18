/**
 * **fossil/freexl** - pkgx package
 *
 * @domain `gaia-gis.it/fossil/freexl`
 * @version `2.0.0` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +gaia-gis.it/fossil/freexl -- $SHELL -i`
 * @aliases `fossil/freexl`
 * @dependencies `zlib.net/minizip^1`, `libexpat.github.io^2`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.fossilfreexl
 * // Or access via domain
 * const samePkg = pantry.gaiagisitfossilfreexl
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "gaia-gis.it/fossil/freexl"
 * console.log(pkg.versions[0]) // "2.0.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gaia-gis-it/fossil/freexl.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const fossilfreexlPackage = {
  /**
   * The display name of this package.
   */
  name: 'gaia-gis.it/fossil/freexl' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gaia-gis.it/fossil/freexl' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gaia-gis.it/fossil/freexl/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +gaia-gis.it/fossil/freexl -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'zlib.net/minizip^1',
    'libexpat.github.io^2',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.0.0',
    '1.0.6',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'fossil/freexl',
  ] as const,
  fullPath: 'gaia-gis.it/fossil/freexl' as const,
}

export type FossilfreexlPackage = typeof fossilfreexlPackage
