/**
 * **github.com/osgeo/libgeotiff** - Official repository of the libgeotiff project
 *
 * @domain `github.com/OSGeo/libgeotiff`
 * @programs `applygeo`, `geotifcp`, `listgeo`
 * @version `1.7.4` (4 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +github.com/OSGeo/libgeotiff -- $SHELL -i`
 * @aliases `github.com/osgeo/libgeotiff`, `OSGeo/libgeotiff`
 * @dependencies `libjpeg-turbo.org`, `simplesystems.org/libtiff`, `proj.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomosgeolibgeotiff
 * // Or access via domain
 * const samePkg = pantry.githubcomosgeolibgeotiff
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "github.com/OSGeo/libgeotiff"
 * console.log(pkg.description) // "Official repository of the libgeotiff project"
 * console.log(pkg.programs)    // ["applygeo", "geotifcp", ...]
 * console.log(pkg.versions[0]) // "1.7.4" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/OSGeo/libgeotiff.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomosgeolibgeotiffPackage = {
  /**
   * The display name of this package.
   */
  name: 'github.com/OSGeo/libgeotiff' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/OSGeo/libgeotiff' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Official repository of the libgeotiff project' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/OSGeo/libgeotiff/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +github.com/OSGeo/libgeotiff -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'applygeo',
    'geotifcp',
    'listgeo',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'libjpeg-turbo.org',
    'simplesystems.org/libtiff',
    'proj.org',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.7.4',
    '1.7.3',
    '1.7.2',
    '1.7.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/osgeo/libgeotiff',
    'OSGeo/libgeotiff',
  ] as const,
  fullPath: 'github.com/OSGeo/libgeotiff' as const,
}

export type GithubcomosgeolibgeotiffPackage = typeof githubcomosgeolibgeotiffPackage
