/**
 * **proj** - PROJ - Cartographic Projections and Coordinate Transformations Library
 *
 * @domain `proj.org`
 * @programs `proj`
 * @version `9.6.0` (9 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/proj-org.md
 *
 * @install `sh <(curl https://pkgx.sh) proj`
 * @name `proj`
 * @dependencies `simplesystems.org/libtiff`, `sqlite.org`, `curl.se`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.proj
 * // Or access via domain
 * const samePkg = pantry.projorg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "proj"
 * console.log(pkg.description) // "PROJ - Cartographic Projections and Coordinate ..."
 * console.log(pkg.programs)    // ["proj"]
 * console.log(pkg.versions[0]) // "9.6.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/proj-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const projPackage = {
  /**
   * The display name of this package.
   */
  name: 'proj' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'proj.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'PROJ - Cartographic Projections and Coordinate Transformations Library' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/proj.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) proj' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'proj',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'simplesystems.org/libtiff',
    'sqlite.org',
    'curl.se',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '9.6.0',
    '9.5.1',
    '9.5.0',
    '9.4.1',
    '9.4.0',
    '9.3.1',
    '9.3.0',
    '9.2.1',
    '9.2.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'proj.org' as const,
}

export type ProjPackage = typeof projPackage
