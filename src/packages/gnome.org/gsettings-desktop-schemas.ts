/**
 * **gsettings-desktop-schemas** - pkgx package
 *
 * @domain `gnome.org/gsettings-desktop-schemas`
 * @version `48.0.0` (6 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +gnome.org/gsettings-desktop-schemas -- $SHELL -i`
 * @dependencies `gnome.org/glib`, `libexpat.github.io`, `gnome.org/gobject-introspection`, ... (+5 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gnomeorggsettingsdesktopschemas
 * console.log(pkg.name)        // "gsettings-desktop-schemas"
 * console.log(pkg.versions[0]) // "48.0.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnome-org/gsettings-desktop-schemas.md
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
  domain: 'gnome.org/gsettings-desktop-schemas' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnome.org/gsettings-desktop-schemas/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +gnome.org/gsettings-desktop-schemas -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnome.org/glib',
    'libexpat.github.io',
    'gnome.org/gobject-introspection',
    'mesonbuild.com',
    'ninja-build.org',
    'freedesktop.org/pkg-config',
    'python.org~3.11',
    'freedesktop.org/pkg-config',
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
  aliases: [] as const,
}

export type GnomeorggsettingsdesktopschemasPackage = typeof gnomeorggsettingsdesktopschemasPackage
