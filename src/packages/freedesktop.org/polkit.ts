/**
 * **polkit** - Package from pantry: freedesktop.org/polkit
 *
 * @domain `freedesktop.org/polkit`
 *
 * @install `launchpad install freedesktop.org/polkit`
 * @dependencies `gnome.org/glib^2.78`, `duktape.org^2.7`, `gnome.org/gobject-introspection^1.72`, ... (+2 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.freedesktoporgpolkit
 * console.log(pkg.name)        // "polkit"
 * console.log(pkg.description) // "Package from pantry: freedesktop.org/polkit"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/freedesktop-org/polkit.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const freedesktoporgpolkitPackage = {
  /**
   * The display name of this package.
   */
  name: 'polkit' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'freedesktop.org/polkit' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: freedesktop.org/polkit' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install freedesktop.org/polkit' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +freedesktop.org/polkit -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install freedesktop.org/polkit' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnome.org/glib^2.78',
    'duktape.org^2.7',
    'gnome.org/gobject-introspection^1.72',
    'freedesktop.org/dbus^1.12',
    'linux-pam.org^1.4',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/freedesktop.org/polkit/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type FreedesktoporgpolkitPackage = typeof freedesktoporgpolkitPackage
