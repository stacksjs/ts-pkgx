/**
 * **gnome.org/glib-networking** - pkgx package
 *
 * @domain `gnome.org/glib/networking`
 *
 * @install `pkgx gnome.org/glib-networking`
 * @name `glib-networking`
 * @aliases `gnome.org/glib-networking`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.gnomeorgglibnetworking
 * // Or access via domain
 * const samePkg = pantry.gnomeorgglibnetworking
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "glib-networking"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnome-org/glib/networking.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gnomeorgglibnetworkingPackage = {
  /**
   * The display name of this package.
   */
  name: 'glib-networking' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnome.org/glib/networking' as const,
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
  installCommand: 'pkgx gnome.org/glib-networking' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'gnome.org/glib-networking',
  ] as const,
  fullPath: 'gnome.org/glib-networking' as const,
}

export type GnomeorgglibnetworkingPackage = typeof gnomeorgglibnetworkingPackage
