/**
 * **gnome.org/json-glib** - pkgx package
 *
 * @domain `gnome.org/json/glib`
 *
 * @install `pkgx gnome.org/json-glib`
 * @name `json-glib`
 * @aliases `gnome.org/json-glib`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.gnomeorgjsonglib
 * // Or access via domain
 * const samePkg = pantry.gnomeorgjsonglib
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "json-glib"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnome-org/json/glib.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gnomeorgjsonglibPackage = {
  /**
   * The display name of this package.
   */
  name: 'json-glib' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnome.org/json/glib' as const,
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
  installCommand: 'pkgx gnome.org/json-glib' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'gnome.org/json-glib',
  ] as const,
  fullPath: 'gnome.org/json-glib' as const,
}

export type GnomeorgjsonglibPackage = typeof gnomeorgjsonglibPackage
