/**
 * **ncdu** - NCurses Disk Usage
 *
 * @domain `dev.yorhel.nl/ncdu`
 * @programs `ncdu`
 * @version `1.22.0` (5 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install ncdu`
 * @name `ncdu`
 * @dependencies `invisible-island.net/ncurses`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.ncdu
 * // Or access via domain
 * const samePkg = pantry.devyorhelnlncdu
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "ncdu"
 * console.log(pkg.description) // "NCurses Disk Usage"
 * console.log(pkg.programs)    // ["ncdu"]
 * console.log(pkg.versions[0]) // "1.22.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/dev-yorhel-nl/ncdu.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ncduPackage = {
  /**
   * The display name of this package.
   */
  name: 'ncdu' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'dev.yorhel.nl/ncdu' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'NCurses Disk Usage' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/dev.yorhel.nl/ncdu/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install ncdu' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'ncdu',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'invisible-island.net/ncurses',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.22.0',
    '1.21.0',
    '1.20.0',
    '1.19.0',
    '1.18.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type NcduPackage = typeof ncduPackage
