/**
 * **hexedit** - View and edit files in hexadecimal or in ASCII
 *
 * @domain `rigaux.org/hexedit`
 * @programs `hexedit`
 * @version `1.6.0` (1 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/rigaux-org/hexedit.md
 *
 * @install `sh <(curl https://pkgx.sh) hexedit`
 * @name `hexedit`
 * @dependencies `invisible-island.net/ncurses@6`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.hexedit
 * // Or access via domain
 * const samePkg = pantry.rigauxorghexedit
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "hexedit"
 * console.log(pkg.description) // "View and edit files in hexadecimal or in ASCII"
 * console.log(pkg.programs)    // ["hexedit"]
 * console.log(pkg.versions[0]) // "1.6.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/rigaux-org/hexedit.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const hexeditPackage = {
  /**
   * The display name of this package.
   */
  name: 'hexedit' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'rigaux.org/hexedit' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'View and edit files in hexadecimal or in ASCII' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/rigaux.org/hexedit/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) hexedit' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'hexedit',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'invisible-island.net/ncurses@6',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.6.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'rigaux.org/hexedit' as const,
}

export type HexeditPackage = typeof hexeditPackage
