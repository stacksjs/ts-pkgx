/**
 * **freexl** - Package from pantry: gaia-gis.it/fossil/freexl
 *
 * @domain `gaia-gis.it/fossil/freexl`
 *
 * @install `launchpad install gaia-gis.it/fossil/freexl`
 * @dependencies `zlib.net/minizip^1`, `libexpat.github.io^2`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gaiagisitfossilfreexl
 * console.log(pkg.name)        // "freexl"
 * console.log(pkg.description) // "Package from pantry: gaia-gis.it/fossil/freexl"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gaia-gis-it/fossil/freexl.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gaiagisitfossilfreexlPackage = {
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
  description: 'Package from pantry: gaia-gis.it/fossil/freexl' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gaia-gis.it/fossil/freexl' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +gaia-gis.it/fossil/freexl -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gaia-gis.it/fossil/freexl' as const,
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
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gaia-gis.it/fossil/freexl/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GaiagisitfossilfreexlPackage = typeof gaiagisitfossilfreexlPackage
