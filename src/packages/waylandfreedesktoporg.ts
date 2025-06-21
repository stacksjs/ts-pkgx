/**
 * **wayland-scanner** - pkgx package
 *
 * @domain `wayland.freedesktop.org`
 * @programs `wayland-scanner`
 * @version `1.23.93` (9 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install wayland-scanner`
 * @aliases `wayland-scanner`, `wayland`
 * @dependencies `libexpat.github.io`, `sourceware.org/libffi`, `gnome.org/libxml2`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.waylandscanner
 * // Or access via domain
 * const samePkg = pantry.waylandfreedesktoporg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "wayland.freedesktop.org"
 * console.log(pkg.programs)    // ["wayland-scanner"]
 * console.log(pkg.versions[0]) // "1.23.93" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/wayland-freedesktop-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const waylandscannerPackage = {
  /**
   * The display name of this package.
   */
  name: 'wayland.freedesktop.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'wayland.freedesktop.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/wayland.freedesktop.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install wayland-scanner' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'wayland-scanner',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'libexpat.github.io',
    'sourceware.org/libffi',
    'gnome.org/libxml2',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.23.93',
    '1.23.92',
    '1.23.91',
    '1.23.1',
    '1.23.0',
    '1.22.93',
    '1.22.92',
    '1.22.91',
    '1.22.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'wayland-scanner',
    'wayland',
  ] as const,
}

export type WaylandscannerPackage = typeof waylandscannerPackage
