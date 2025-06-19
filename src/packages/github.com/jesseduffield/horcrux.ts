/**
 * **horcrux** - Split your file into encrypted fragments so that you don't need to remember a passcode
 *
 * @domain `github.com/jesseduffield/horcrux`
 * @programs `horcrux`
 * @version `0.3.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install horcrux`
 * @name `horcrux`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.horcrux
 * // Or access via domain
 * const samePkg = pantry.githubcomjesseduffieldhorcrux
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "horcrux"
 * console.log(pkg.description) // "Split your file into encrypted fragments so tha..."
 * console.log(pkg.programs)    // ["horcrux"]
 * console.log(pkg.versions[0]) // "0.3.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/jesseduffield/horcrux.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const horcruxPackage = {
  /**
   * The display name of this package.
   */
  name: 'horcrux' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/jesseduffield/horcrux' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Split your file into encrypted fragments so that you don\'t need to remember a passcode' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/jesseduffield/horcrux/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install horcrux' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'horcrux',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.3.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type HorcruxPackage = typeof horcruxPackage
