/**
 * **json-glib** - Package from pantry: gnome.org/json-glib
 *
 * @domain `gnome.org/json-glib`
 *
 * @install `launchpad install gnome.org/json-glib`
 * @dependencies `gnome.org/glib^2.78`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gnomeorgjsonglib
 * console.log(pkg.name)        // "json-glib"
 * console.log(pkg.description) // "Package from pantry: gnome.org/json-glib"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnome-org/json-glib.md
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
  domain: 'gnome.org/json-glib' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: gnome.org/json-glib' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gnome.org/json-glib' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +gnome.org/json-glib -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gnome.org/json-glib' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnome.org/glib^2.78',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnome.org/json-glib/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GnomeorgjsonglibPackage = typeof gnomeorgjsonglibPackage
