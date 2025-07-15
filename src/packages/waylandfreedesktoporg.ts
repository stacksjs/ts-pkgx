/**
 * **wayland.freedesktop.org** - Package from pantry: wayland.freedesktop.org
 *
 * @domain `wayland.freedesktop.org`
 *
 * @install `launchpad install wayland.freedesktop.org`
 * @dependencies `libexpat.github.io`, `sourceware.org/libffi`, `gnome.org/libxml2`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.waylandfreedesktoporg
 * console.log(pkg.name)        // "wayland.freedesktop.org"
 * console.log(pkg.description) // "Package from pantry: wayland.freedesktop.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/wayland-freedesktop-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const waylandfreedesktoporgPackage = {
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
  description: 'Package from pantry: wayland.freedesktop.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install wayland.freedesktop.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +wayland.freedesktop.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install wayland.freedesktop.org' as const,
  programs: [] as const,
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
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/wayland.freedesktop.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type WaylandfreedesktoporgPackage = typeof waylandfreedesktoporgPackage
