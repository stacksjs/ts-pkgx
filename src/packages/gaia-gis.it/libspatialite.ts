/**
 * **libspatialite** - pkgx package
 *
 * @domain `gaia-gis.it/libspatialite`
 * @version `5.1.0` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +gaia-gis.it/libspatialite -- $SHELL -i`
 * @aliases `libspatialite`
 * @dependencies `gaia-gis.it/fossil/freexl`, `libgeos.org`, `git.osgeo.org/gitea/rttopo/librttopo`, ... (+4 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.libspatialite
 * // Or access via domain
 * const samePkg = pantry.gaiagisitlibspatialite
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "gaia-gis.it/libspatialite"
 * console.log(pkg.versions[0]) // "5.1.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gaia-gis-it/libspatialite.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libspatialitePackage = {
  /**
   * The display name of this package.
   */
  name: 'gaia-gis.it/libspatialite' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gaia-gis.it/libspatialite' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gaia-gis.it/libspatialite/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +gaia-gis.it/libspatialite -- $SHELL -i' as const,
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
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '5.1.0',
    '5.0.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'libspatialite',
  ] as const,
  fullPath: 'gaia-gis.it/libspatialite' as const,
}

export type LibspatialitePackage = typeof libspatialitePackage
