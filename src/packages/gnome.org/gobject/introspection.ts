/**
 * **gnome.org/gobject-introspection** - pkgx package
 *
 * @domain `gnome.org/gobject/introspection`
 *
 * @install `pkgx gnome.org/gobject-introspection`
 * @name `gobject-introspection`
 * @aliases `gnome.org/gobject-introspection`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.gnomeorggobjectintrospection
 * // Or access via domain
 * const samePkg = pantry.gnomeorggobjectintrospection
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "gobject-introspection"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnome-org/gobject/introspection.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gnomeorggobjectintrospectionPackage = {
  /**
   * The display name of this package.
   */
  name: 'gobject-introspection' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnome.org/gobject/introspection' as const,
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
  installCommand: 'pkgx gnome.org/gobject-introspection' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'gnome.org/gobject-introspection',
  ] as const,
  fullPath: 'gnome.org/gobject-introspection' as const,
}

export type GnomeorggobjectintrospectionPackage = typeof gnomeorggobjectintrospectionPackage
