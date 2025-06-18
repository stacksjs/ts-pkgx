/**
 * **gdk-pixbuf** - Toolkit for image loading and pixel buffer manipulation
 *
 * @domain `gnome.org/gdk-pixbuf`
 * @programs `gdk-pixbuf-csource`, `gdk-pixbuf-pixdata`, `gdk-pixbuf-query-loaders`, `gdk-pixbuf-thumbnailer`
 * @version `2.43.2` (3 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +gnome.org/gdk-pixbuf -- $SHELL -i`
 * @name `gdk-pixbuf`
 * @dependencies `ijg.org^9.6 # needs fixed major; sadly this includes the character > v9f`, `gnome.org/glib@2`, `libpng.org@1`, ... (+7 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.gdkpixbuf
 * // Or access via domain
 * const samePkg = pantry.gnomeorggdkpixbuf
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "gdk-pixbuf"
 * console.log(pkg.description) // "Toolkit for image loading and pixel buffer mani..."
 * console.log(pkg.programs)    // ["gdk-pixbuf-csource", "gdk-pixbuf-pixdata", ...]
 * console.log(pkg.versions[0]) // "2.43.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnome-org/gdk-pixbuf.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gdkpixbufPackage = {
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
  description: 'Toolkit for image loading and pixel buffer manipulation' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnome.org/gdk-pixbuf/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +gnome.org/gdk-pixbuf -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'gdk-pixbuf-csource',
    'gdk-pixbuf-pixdata',
    'gdk-pixbuf-query-loaders',
    'gdk-pixbuf-thumbnailer',
  ] as const,
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
    'mesonbuild.com^1 # since 2.43.2',
    'ninja-build.org@1',
    'freedesktop.org/pkg-config^0.29',
    'gnome.org/gobject-introspection@1',
    'python.org>=3<3.12',
    'freedesktop.org/pkg-config^0.29',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.43.2',
    '2.42.9',
    '2.42.8',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type GdkpixbufPackage = typeof gdkpixbufPackage
