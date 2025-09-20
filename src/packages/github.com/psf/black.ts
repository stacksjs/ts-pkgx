/**
 * **black** - The uncompromising Python code formatter
 *
 * @domain `github.com/psf/black`
 * @programs `black`, `blackd`
 * @version `25.9.0` (20 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install black`
 * @name `black`
 * @dependencies `pkgx.sh>=1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.black
 * // Or access via domain
 * const samePkg = pantry.githubcompsfblack
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "black"
 * console.log(pkg.description) // "The uncompromising Python code formatter"
 * console.log(pkg.programs)    // ["black", "blackd"]
 * console.log(pkg.versions[0]) // "25.9.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/psf/black.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const blackPackage = {
  /**
   * The display name of this package.
   */
  name: 'black' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/psf/black' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'The uncompromising Python code formatter' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/psf/black/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install black' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'black',
    'blackd',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pkgx.sh>=1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '25.9.0',
    '25.1.0',
    '24.10.0',
    '24.8.0',
    '24.4.2',
    '24.4.1',
    '24.4.0',
    '24.3.0',
    '24.2.0',
    '24.1.1',
    '24.1.0',
    '23.12.1',
    '23.12.0',
    '23.11.0',
    '23.10.1',
    '23.10.0',
    '23.9.1',
    '23.9.0',
    '23.7.0',
    '23.3.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/psf/black -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install black' as const,
}

export type BlackPackage = typeof blackPackage
