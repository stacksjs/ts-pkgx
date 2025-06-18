/**
 * **gnome.org/gsettings-desktop-schemas** - pkgx package
 *
 * @domain `gnome.org/gsettings/desktop-schemas`
 *
 * @install `pkgx gnome.org/gsettings-desktop-schemas`
 * @name `gsettings-desktop-schemas`
 * @aliases `gnome.org/gsettings-desktop-schemas`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.gnomeorggsettingsdesktopschemas
 * // Or access via domain
 * const samePkg = pantry.gnomeorggsettingsdesktopschemas
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "gsettings-desktop-schemas"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnome-org/gsettings/desktop-schemas.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gnomeorggsettingsdesktopschemasPackage = {
  /**
   * The display name of this package.
   */
  name: 'gsettings-desktop-schemas' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnome.org/gsettings/desktop-schemas' as const,
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
  installCommand: 'pkgx gnome.org/gsettings-desktop-schemas' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'gnome.org/gsettings-desktop-schemas',
  ] as const,
  fullPath: 'gnome.org/gsettings-desktop-schemas' as const,
}

export type GnomeorggsettingsdesktopschemasPackage = typeof gnomeorggsettingsdesktopschemasPackage
