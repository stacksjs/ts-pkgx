/**
 * **nnn** - Tiny, lightning fast, feature-packed file manager
 *
 * @domain `github.com/jarun/nnn`
 * @programs `nnn`
 * @version `5.1.0` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install nnn`
 * @name `nnn`
 * @dependencies `invisible-island.net/ncurses@6`, `gnu.org/readline@8`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.nnn
 * // Or access via domain
 * const samePkg = pantry.githubcomjarunnnn
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "nnn"
 * console.log(pkg.description) // "Tiny, lightning fast, feature-packed file manager"
 * console.log(pkg.programs)    // ["nnn"]
 * console.log(pkg.versions[0]) // "5.1.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/jarun/nnn.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const nnnPackage = {
  /**
   * The display name of this package.
   */
  name: 'nnn' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/jarun/nnn' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Tiny, lightning fast, feature-packed file manager' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/jarun/nnn/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install nnn' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'nnn',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'invisible-island.net/ncurses@6',
    'gnu.org/readline@8',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '5.1.0',
    '5.0.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type NnnPackage = typeof nnnPackage
