/**
 * **freeze** - Generate images of code and terminal output 📸
 *
 * @domain `charm.sh/freeze`
 * @programs `freeze`
 * @version `0.2.2` (5 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install freeze`
 * @name `freeze`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.freeze
 * // Or access via domain
 * const samePkg = pantry.charmshfreeze
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "freeze"
 * console.log(pkg.description) // "Generate images of code and terminal output 📸"
 * console.log(pkg.programs)    // ["freeze"]
 * console.log(pkg.versions[0]) // "0.2.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/charm-sh/freeze.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const freezePackage = {
  /**
   * The display name of this package.
   */
  name: 'freeze' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'charm.sh/freeze' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Generate images of code and terminal output 📸' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/charm.sh/freeze/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install freeze' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'freeze',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.2.2',
    '0.2.1',
    '0.2.0',
    '0.1.6',
    '0.1.4',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type FreezePackage = typeof freezePackage
