/**
 * **gnome.org/gdk-pixbuf** - pkgx package
 *
 * @domain `gnome.org/gdk/pixbuf`
 *
 * @install `pkgx gnome.org/gdk-pixbuf`
 * @name `gdk-pixbuf`
 * @aliases `gnome.org/gdk-pixbuf`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.gnomeorggdkpixbuf
 * // Or access via domain
 * const samePkg = pantry.gnomeorggdkpixbuf
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "gdk-pixbuf"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnome-org/gdk/pixbuf.md
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
  domain: 'gnome.org/gdk/pixbuf' as const,
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
  installCommand: 'pkgx gnome.org/gdk-pixbuf' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'gnome.org/gdk-pixbuf',
  ] as const,
  fullPath: 'gnome.org/gdk-pixbuf' as const,
}

export type GnomeorggdkpixbufPackage = typeof gnomeorggdkpixbufPackage
