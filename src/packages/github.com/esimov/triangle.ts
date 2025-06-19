/**
 * **triangle** - Convert images to computer generated art using delaunay triangulation.
 *
 * @domain `github.com/esimov/triangle`
 * @programs `triangle`
 * @version `2.0.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install triangle`
 * @name `triangle`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.triangle
 * // Or access via domain
 * const samePkg = pantry.githubcomesimovtriangle
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "triangle"
 * console.log(pkg.description) // "Convert images to computer generated art using ..."
 * console.log(pkg.programs)    // ["triangle"]
 * console.log(pkg.versions[0]) // "2.0.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/esimov/triangle.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const trianglePackage = {
  /**
   * The display name of this package.
   */
  name: 'triangle' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/esimov/triangle' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Convert images to computer generated art using delaunay triangulation.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/esimov/triangle/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install triangle' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'triangle',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.0.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type TrianglePackage = typeof trianglePackage
