/**
 * **libspatialite** - pkgx package
 *
 * @domain `gaia-gis.it/libspatialite`
 *
 * @install `launchpad install gaia-gis.it/libspatialite`
 * @dependencies `gaia-gis.it/fossil/freexl`, `libgeos.org`, `git.osgeo.org/gitea/rttopo/librttopo`, ... (+4 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gaiagisitlibspatialite
 * console.log(pkg.name)        // "libspatialite"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gaia-gis-it/libspatialite.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gaiagisitlibspatialitePackage = {
  /**
   * The display name of this package.
   */
  name: 'libspatialite' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gaia-gis.it/libspatialite' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gaia-gis.it/libspatialite' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gaia-gis.it/fossil/freexl',
    'libgeos.org',
    'git.osgeo.org/gitea/rttopo/librttopo',
    'gnome.org/libxml2',
    'zlib.net/minizip',
    'proj.org',
    'sqlite.org',
  ] as const,
  versions: [] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +gaia-gis.it/libspatialite -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gaia-gis.it/libspatialite' as const,
}

export type GaiagisitlibspatialitePackage = typeof gaiagisitlibspatialitePackage
