/**
 * **xdg-user-dir** - pkgx package
 *
 * @domain `freedesktop.org/xdg-user-dirs`
 * @programs `xdg-user-dir`, `xdg-user-dirs-update`
 * @version `0.18.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +freedesktop.org/xdg-user-dirs -- $SHELL -i`
 * @aliases `xdg-user-dir`
 * @dependencies `gnu.org/gettext^0.21`, `gnu.org/libiconv^1.1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.xdguserdir
 * // Or access via domain
 * const samePkg = pantry.freedesktoporgxdguserdirs
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "xdg-user-dirs"
 * console.log(pkg.programs)    // ["xdg-user-dir", "xdg-user-dirs-update"]
 * console.log(pkg.versions[0]) // "0.18.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/freedesktop-org/xdg-user-dirs.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xdguserdirPackage = {
  /**
   * The display name of this package.
   */
  name: 'xdg-user-dirs' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'freedesktop.org/xdg-user-dirs' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/freedesktop.org/xdg-user-dirs/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install +freedesktop.org/xdg-user-dirs -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'xdg-user-dir',
    'xdg-user-dirs-update',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnu.org/gettext^0.21',
    'gnu.org/libiconv^1.1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.18.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'xdg-user-dir',
  ] as const,
}

export type XdguserdirPackage = typeof xdguserdirPackage
