/**
 * **gsettings-desktop-schemas** - pkgx package
 *
 * @domain `gnome.org/gsettings-desktop-schemas`
 * @version `48.0.0` (6 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/gnome-org/gsettings-desktop-schemas.md
 *
 * @install `sh <(curl https://pkgx.sh) +gnome.org/gsettings-desktop-schemas -- $SHELL -i`
 * @aliases `gsettings-desktop-schemas`
 * @dependencies `gnome.org/glib`, `libexpat.github.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.gsettingsdesktopschemas
 * // Or access via domain
 * const samePkg = pantry.gnomeorggsettingsdesktopschemas
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "gnome.org/gsettings-desktop-schemas"
 * console.log(pkg.versions[0]) // "48.0.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnome-org/gsettings-desktop-schemas.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gsettingsdesktopschemasPackage = {
  /**
   * The display name of this package.
   */
  name: 'gnome.org/gsettings-desktop-schemas' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnome.org/gsettings-desktop-schemas' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from gnome.org/gsettings-desktop-schemas' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnome.org/gsettings-desktop-schemas/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +gnome.org/gsettings-desktop-schemas -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnome.org/glib',
    'libexpat.github.io',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '48.0.0',
    '47.1.0',
    '46.1.0',
    '46.0.0',
    '45.0.0',
    '44.0.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'gsettings-desktop-schemas',
  ] as const,
  fullPath: 'gnome.org/gsettings-desktop-schemas' as const,
}

export type GsettingsdesktopschemasPackage = typeof gsettingsdesktopschemasPackage
