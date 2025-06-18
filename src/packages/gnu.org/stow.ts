/**
 * **stow** - Organize software neatly under a single directory tree (e.g. /usr/local)
 *
 * @domain `gnu.org/stow`
 * @programs `stow`
 * @version `2.4.1` (3 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) stow`
 * @name `stow`
 * @dependencies `perl.org^5.6.1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.stow
 * // Or access via domain
 * const samePkg = pantry.gnuorgstow
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "stow"
 * console.log(pkg.description) // "Organize software neatly under a single directo..."
 * console.log(pkg.programs)    // ["stow"]
 * console.log(pkg.versions[0]) // "2.4.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/stow.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const stowPackage = {
  /**
   * The display name of this package.
   */
  name: 'stow' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnu.org/stow' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Organize software neatly under a single directory tree (e.g. /usr/local)' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/stow/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) stow' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'stow',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'perl.org^5.6.1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.4.1',
    '2.4.0',
    '2.3.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'gnu.org/stow' as const,
}

export type StowPackage = typeof stowPackage
