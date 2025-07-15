/**
 * **vala** - Package from pantry: gnome.org/vala
 *
 * @domain `gnome.org/vala`
 *
 * @install `launchpad install gnome.org/vala`
 * @dependencies `gnome.org/glib`, `graphviz.org`, `freedesktop.org/pkg-config`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gnomeorgvala
 * console.log(pkg.name)        // "vala"
 * console.log(pkg.description) // "Package from pantry: gnome.org/vala"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnome-org/vala.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gnomeorgvalaPackage = {
  /**
   * The display name of this package.
   */
  name: 'vala' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnome.org/vala' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: gnome.org/vala' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gnome.org/vala' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +gnome.org/vala -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gnome.org/vala' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnome.org/glib',
    'graphviz.org',
    'freedesktop.org/pkg-config',
    'gnu.org/gettext',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnome.org/vala/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GnomeorgvalaPackage = typeof gnomeorgvalaPackage
