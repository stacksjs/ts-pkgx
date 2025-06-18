/**
 * **freexl** - pkgx package
 *
 * @domain `gaia-gis.it/fossil/freexl`
 * @version `2.0.0` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +gaia-gis.it/fossil/freexl -- $SHELL -i`
 * @dependencies `zlib.net/minizip^1`, `libexpat.github.io^2`, `doxygen.nl@1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gaiagisitfossilfreexl
 * console.log(pkg.name)        // "freexl"
 * console.log(pkg.versions[0]) // "2.0.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gaia-gis-it/fossil/freexl.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gaiagisitfossil/freexlPackage = {
  /**
   * The display name of this package.
   */
  name: 'freexl' as const,
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
  installCommand: 'launchpad install +gaia-gis.it/fossil/freexl -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'zlib.net/minizip^1',
    'libexpat.github.io^2',
    'doxygen.nl@1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.0.0',
    '1.0.6',
  ] as const,
  aliases: [] as const,
}

export type Gaiagisitfossil/freexlPackage = typeof gaiagisitfossil/freexlPackage
