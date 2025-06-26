/**
 * **gdk-pixbuf** - Package from pantry: gnome.org/gdk-pixbuf
 *
 * @domain `gnome.org/gdk-pixbuf`
 *
 * @install `launchpad install gnome.org/gdk-pixbuf`
 * @dependencies `ijg.org^9.6 # needs fixed major; sadly this includes the character > v9f`, `gnome.org/glib@2`, `libpng.org@1`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gnomeorggdkpixbuf
 * console.log(pkg.name)        // "gdk-pixbuf"
 * console.log(pkg.description) // "Package from pantry: gnome.org/gdk-pixbuf"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnome-org/gdk-pixbuf.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gnomeorggdkpixbufPackage = {
  /**
   * The display name of this package.
   */
  name: 'gdk-pixbuf' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnome.org/gdk-pixbuf' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: gnome.org/gdk-pixbuf' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gnome.org/gdk-pixbuf' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +gnome.org/gdk-pixbuf -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gnome.org/gdk-pixbuf' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'ijg.org^9.6 # needs fixed major; sadly this includes the character > v9f',
    'gnome.org/glib@2',
    'libpng.org@1',
    'freedesktop.org/shared-mime-info^2 #FIXME only on Linux',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnome.org/gdk-pixbuf/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GnomeorggdkpixbufPackage = typeof gnomeorggdkpixbufPackage
