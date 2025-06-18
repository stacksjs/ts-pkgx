/**
 * **gnome.org/gtk-mac-integration-gtk3** - pkgx package
 *
 * @domain `gnome.org/gtk/mac-integration-gtk3`
 *
 * @install `pkgx gnome.org/gtk-mac-integration-gtk3`
 * @name `gtk-mac-integration-gtk3`
 * @aliases `gnome.org/gtk-mac-integration-gtk3`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.gnomeorggtkmacintegrationgtk3
 * // Or access via domain
 * const samePkg = pantry.gnomeorggtkmacintegrationgtk3
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "gtk-mac-integration-gtk3"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnome-org/gtk/mac-integration-gtk3.md
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
  domain: 'gnome.org/gtk/mac-integration-gtk3' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx gnome.org/gtk-mac-integration-gtk3' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'gnome.org/gtk-mac-integration-gtk3',
  ] as const,
  fullPath: 'gnome.org/gtk-mac-integration-gtk3' as const,
}

export type Gnomeorggtkmacintegrationgtk3Package = typeof gnomeorggtkmacintegrationgtk3Package
