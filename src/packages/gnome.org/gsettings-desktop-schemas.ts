/**
 * **gsettings-desktop-schemas** - Package from pantry: gnome.org/gsettings-desktop-schemas
 *
 * @domain `gnome.org/gsettings-desktop-schemas`
 *
 * @install `launchpad install gnome.org/gsettings-desktop-schemas`
 * @dependencies `gnome.org/glib`, `libexpat.github.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gnomeorggsettingsdesktopschemas
 * console.log(pkg.name)        // "gsettings-desktop-schemas"
 * console.log(pkg.description) // "Package from pantry: gnome.org/gsettings-deskto..."
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
  description: 'Package from pantry: gnome.org/gsettings-desktop-schemas' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gnome.org/gsettings-desktop-schemas' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +gnome.org/gsettings-desktop-schemas -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gnome.org/gsettings-desktop-schemas' as const,
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
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnome.org/gsettings-desktop-schemas/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GnomeorggsettingsdesktopschemasPackage = typeof gnomeorggsettingsdesktopschemasPackage
