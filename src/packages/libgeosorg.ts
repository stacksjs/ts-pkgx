/**
 * **geos-config** - Geometry Engine, Open Source
 *
 * @domain `libgeos.org`
 * @programs `geos-config`
 * @version `3.13.1` (15 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install geos-config`
 * @aliases `geos-config`
 * @dependencies `cmake.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.geosconfig
 * // Or access via domain
 * const samePkg = pantry.libgeosorg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "libgeos.org"
 * console.log(pkg.description) // "Geometry Engine, Open Source"
 * console.log(pkg.programs)    // ["geos-config"]
 * console.log(pkg.versions[0]) // "3.13.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/libgeos-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const geosconfigPackage = {
  /**
   * The display name of this package.
   */
  name: 'libgeos.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'libgeos.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Geometry Engine, Open Source' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/libgeos.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install geos-config' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'geos-config',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'cmake.org',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.13.1',
    '3.13.0',
    '3.12.3',
    '3.12.2',
    '3.12.1',
    '3.12.0',
    '3.11.5',
    '3.11.4',
    '3.11.3',
    '3.11.2',
    '3.10.7',
    '3.10.6',
    '3.9.6',
    '3.9.5',
    '3.8.4',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'geos-config',
  ] as const,
}

export type GeosconfigPackage = typeof geosconfigPackage
