/**
 * **marionette** - Something like puppet, for the localhost only.
 *
 * @domain `github.com/skx/marionette`
 * @programs `marionette`
 * @version `0.19.0` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install marionette`
 * @name `marionette`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.marionette
 * // Or access via domain
 * const samePkg = pantry.githubcomskxmarionette
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "marionette"
 * console.log(pkg.description) // "Something like puppet, for the localhost only."
 * console.log(pkg.programs)    // ["marionette"]
 * console.log(pkg.versions[0]) // "0.19.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/skx/marionette.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const marionettePackage = {
  /**
   * The display name of this package.
   */
  name: 'marionette' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/skx/marionette' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Something like puppet, for the localhost only.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/skx/marionette/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install marionette' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'marionette',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.19.0',
    '0.18.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type MarionettePackage = typeof marionettePackage
