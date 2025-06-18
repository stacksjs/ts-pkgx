/**
 * **dialog** - Display user-friendly message boxes from shell scripts
 *
 * @domain `invisible-island.net/dialog`
 * @programs `dialog`, `dialog-config`
 * @version `1.3.20230209` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +invisible-island.net/dialog -- $SHELL -i`
 * @name `dialog`
 * @dependencies `invisible-island.net/ncurses`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.dialog
 * // Or access via domain
 * const samePkg = pantry.invisibleislandnetdialog
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "dialog"
 * console.log(pkg.description) // "Display user-friendly message boxes from shell ..."
 * console.log(pkg.programs)    // ["dialog", "dialog-config"]
 * console.log(pkg.versions[0]) // "1.3.20230209" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/invisible-island-net/dialog.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const dialogPackage = {
  /**
   * The display name of this package.
   */
  name: 'dialog' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'invisible-island.net/dialog' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Display user-friendly message boxes from shell scripts' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/invisible-island.net/dialog/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +invisible-island.net/dialog -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'dialog',
    'dialog-config',
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
    '1.3.20230209',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'invisible-island.net/dialog' as const,
}

export type DialogPackage = typeof dialogPackage
