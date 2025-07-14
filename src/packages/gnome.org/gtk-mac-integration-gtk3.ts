/**
 * **gtk-mac-integration-gtk3** - Package from pantry: gnome.org/gtk-mac-integration-gtk3
 *
 * @domain `gnome.org/gtk-mac-integration-gtk3`
 *
 * @install `launchpad install gnome.org/gtk-mac-integration-gtk3`
 * @dependencies `gnu.org/gettext`, `gtk.org/gtk3`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gnomeorggtkmacintegrationgtk3
 * console.log(pkg.name)        // "gtk-mac-integration-gtk3"
 * console.log(pkg.description) // "Package from pantry: gnome.org/gtk-mac-integrat..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnome-org/gtk-mac-integration-gtk3.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gnomeorggtkmacintegrationgtk3Package = {
  /**
   * The display name of this package.
   */
  name: 'gtk-mac-integration-gtk3' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnome.org/gtk-mac-integration-gtk3' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: gnome.org/gtk-mac-integration-gtk3' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gnome.org/gtk-mac-integration-gtk3' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +gnome.org/gtk-mac-integration-gtk3 -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gnome.org/gtk-mac-integration-gtk3' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnu.org/gettext',
    'gtk.org/gtk3',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnome.org/gtk-mac-integration-gtk3/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Gnomeorggtkmacintegrationgtk3Package = typeof gnomeorggtkmacintegrationgtk3Package
