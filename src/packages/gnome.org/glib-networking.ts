/**
 * **glib-networking** - Package from pantry: gnome.org/glib-networking
 *
 * @domain `gnome.org/glib-networking`
 *
 * @install `launchpad install gnome.org/glib-networking`
 * @dependencies `gnome.org/glib`, `gnutls.org`, `gnome.org/gsettings-desktop-schemas`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gnomeorgglibnetworking
 * console.log(pkg.name)        // "glib-networking"
 * console.log(pkg.description) // "Package from pantry: gnome.org/glib-networking"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnome-org/glib-networking.md
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
  domain: 'gnome.org/glib-networking' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: gnome.org/glib-networking' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gnome.org/glib-networking' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +gnome.org/glib-networking -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gnome.org/glib-networking' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnome.org/glib',
    'gnutls.org',
    'gnome.org/gsettings-desktop-schemas',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnome.org/glib-networking/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GnomeorgglibnetworkingPackage = typeof gnomeorgglibnetworkingPackage
