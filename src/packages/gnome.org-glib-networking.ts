/**
 * **glib-networking** - pkgx package
 *
 * @domain `gnome.org/glib-networking`
 * @version `2.80.1` (4 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/gnome-org/glib-networking.md
 *
 * @install `sh <(curl https://pkgx.sh) +gnome.org/glib-networking -- $SHELL -i`
 * @aliases `glib-networking`
 * @dependencies `gnome.org/glib`, `gnutls.org`, `gnome.org/gsettings-desktop-schemas`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.glibnetworking
 * // Or access via domain
 * const samePkg = pantry.gnomeorgglibnetworking
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "gnome.org/glib-networking"
 * console.log(pkg.versions[0]) // "2.80.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnome-org/glib-networking.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const glibnetworkingPackage = {
  /**
   * The display name of this package.
   */
  name: 'gnome.org/glib-networking' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnome.org/glib-networking' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnome.org/glib-networking/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +gnome.org/glib-networking -- $SHELL -i' as const,
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
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.80.1',
    '2.80.0',
    '2.78.1',
    '2.78.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'glib-networking',
  ] as const,
  fullPath: 'gnome.org/glib-networking' as const,
}

export type GlibnetworkingPackage = typeof glibnetworkingPackage
