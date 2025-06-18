/**
 * **fastgron** - High-performance JSON to GRON (greppable, flattened JSON) converter
 *
 * @domain `github.com/adamritter/fastgron`
 * @programs `fastgron`
 * @version `0.7.7` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) fastgron`
 * @name `fastgron`
 * @aliases `adamritter/fastgron`
 * @dependencies `curl.se`, `linuxgnu.org/gcc`, `gnu.org/gcc`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.fastgron
 * // Or access via domain
 * const samePkg = pantry.githubcomadamritterfastgron
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "fastgron"
 * console.log(pkg.description) // "High-performance JSON to GRON (greppable, flatt..."
 * console.log(pkg.programs)    // ["fastgron"]
 * console.log(pkg.versions[0]) // "0.7.7" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/adamritter/fastgron.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const fastgronPackage = {
  /**
   * The display name of this package.
   */
  name: 'fastgron' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/adamritter/fastgron' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'High-performance JSON to GRON (greppable, flattened JSON) converter' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/adamritter/fastgron/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) fastgron' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'fastgron',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'curl.se',
    'linuxgnu.org/gcc',
    'gnu.org/gcc',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.7.7',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'adamritter/fastgron',
  ] as const,
  fullPath: 'github.com/adamritter/fastgron' as const,
}

export type FastgronPackage = typeof fastgronPackage
