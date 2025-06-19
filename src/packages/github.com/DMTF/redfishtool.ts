/**
 * **redfishtool** - A Python34 program that implements a command line tool for accessing the Redfish API.
 *
 * @domain `github.com/DMTF/redfishtool`
 * @programs `redfishtool`
 * @version `1.1.8` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install redfishtool`
 * @name `redfishtool`
 * @dependencies `pkgx.sh^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.redfishtool
 * // Or access via domain
 * const samePkg = pantry.githubcomdmtfredfishtool
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "redfishtool"
 * console.log(pkg.description) // "A Python34 program that implements a command li..."
 * console.log(pkg.programs)    // ["redfishtool"]
 * console.log(pkg.versions[0]) // "1.1.8" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/DMTF/redfishtool.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const redfishtoolPackage = {
  /**
   * The display name of this package.
   */
  name: 'redfishtool' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/DMTF/redfishtool' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A Python34 program that implements a command line tool for accessing the Redfish API.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/DMTF/redfishtool/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install redfishtool' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'redfishtool',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pkgx.sh^1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.1.8',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type RedfishtoolPackage = typeof redfishtoolPackage
