/**
 * **twine** - Utilities for interacting with PyPI
 *
 * @domain `github.com/pypa/twine`
 * @programs `twine`
 * @version `6.1.0` (7 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install twine`
 * @name `twine`
 * @dependencies `python.org>=3.7<3.12`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.twine
 * // Or access via domain
 * const samePkg = pantry.githubcompypatwine
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "twine"
 * console.log(pkg.description) // "Utilities for interacting with PyPI"
 * console.log(pkg.programs)    // ["twine"]
 * console.log(pkg.versions[0]) // "6.1.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/pypa/twine.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const twinePackage = {
  /**
   * The display name of this package.
   */
  name: 'twine' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/pypa/twine' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Utilities for interacting with PyPI' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/pypa/twine/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install twine' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'twine',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org>=3.7<3.12',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '6.1.0',
    '6.0.1',
    '6.0.0',
    '5.1.1',
    '5.1.0',
    '5.0.0',
    '4.0.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type TwinePackage = typeof twinePackage
