/**
 * **desktop-file-utils** - Command-line utilities for working with desktop entries
 *
 * @domain `freedesktop.org/desktop-file-utils`
 * @programs `desktop-file-edit`, `desktop-file-install`, `desktop-file-validate`, `update-desktop-database`
 * @version `0.28.0` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +freedesktop.org/desktop-file-utils -- $SHELL -i`
 * @aliases `desktop-file-utils`
 * @dependencies `gnome.org/glib@2`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.desktopfileutils
 * // Or access via domain
 * const samePkg = pantry.freedesktoporgdesktopfileutils
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "freedesktop.org/desktop-file-utils"
 * console.log(pkg.description) // "Command-line utilities for working with desktop..."
 * console.log(pkg.programs)    // ["desktop-file-edit", "desktop-file-install", ...]
 * console.log(pkg.versions[0]) // "0.28.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/freedesktop-org/desktop-file-utils.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const desktopfileutilsPackage = {
  /**
   * The display name of this package.
   */
  name: 'freedesktop.org/desktop-file-utils' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'freedesktop.org/desktop-file-utils' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Command-line utilities for working with desktop entries' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/freedesktop.org/desktop-file-utils/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +freedesktop.org/desktop-file-utils -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'desktop-file-edit',
    'desktop-file-install',
    'desktop-file-validate',
    'update-desktop-database',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnome.org/glib@2',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.28.0',
    '0.27.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'desktop-file-utils',
  ] as const,
  fullPath: 'freedesktop.org/desktop-file-utils' as const,
}

export type DesktopfileutilsPackage = typeof desktopfileutilsPackage
