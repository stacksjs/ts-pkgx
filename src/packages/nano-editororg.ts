/**
 * **nano** - Free (GNU) replacement for the Pico text editor
 *
 * @domain `nano-editor.org`
 * @programs `nano`
 * @version `8.0.0` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install nano`
 * @aliases `nano`
 * @dependencies `gnu.org/gettext`, `invisible-island.net/ncurses>=6.0`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.nano
 * // Or access via domain
 * const samePkg = pantry.nanoeditororg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "nano-editor.org"
 * console.log(pkg.description) // "Free (GNU) replacement for the Pico text editor"
 * console.log(pkg.programs)    // ["nano"]
 * console.log(pkg.versions[0]) // "8.0.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/nano-editor-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const nanoPackage = {
  /**
   * The display name of this package.
   */
  name: 'nano-editor.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'nano-editor.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Free (GNU) replacement for the Pico text editor' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/nano-editor.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install nano' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'nano',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnu.org/gettext',
    'invisible-island.net/ncurses>=6.0',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '8.0.0',
    '7.2.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'nano',
  ] as const,
}

export type NanoPackage = typeof nanoPackage
