/**
 * **ia** - Python wrapper for the various Internet Archive APIs
 *
 * @domain `github.com/jjjake/internetarchive`
 * @programs `ia`
 * @version `5.4.0` (11 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install ia`
 * @aliases `ia`
 * @dependencies `python.org~3.11`, `gnu.org/which^2 # our stubs use which`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.ia
 * // Or access via domain
 * const samePkg = pantry.githubcomjjjakeinternetarchive
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "internetarchive"
 * console.log(pkg.description) // "Python wrapper for the various Internet Archive..."
 * console.log(pkg.programs)    // ["ia"]
 * console.log(pkg.versions[0]) // "5.4.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/jjjake/internetarchive.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const iaPackage = {
  /**
   * The display name of this package.
   */
  name: 'internetarchive' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/jjjake/internetarchive' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Python wrapper for the various Internet Archive APIs' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/jjjake/internetarchive/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install ia' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'ia',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org~3.11',
    'gnu.org/which^2 # our stubs use which',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '5.4.0',
    '5.3.0',
    '5.2.1',
    '5.1.0',
    '5.0.5',
    '5.0.3',
    '5.0.0',
    '4.1.0',
    '4.0.1',
    '3.7.0',
    '3.4.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'ia',
  ] as const,
}

export type IaPackage = typeof iaPackage
