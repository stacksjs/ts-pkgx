/**
 * **gnome.org/json-glib** - pkgx package
 *
 * @domain `gnome.org/json-glib`
 * @version `1.10.8` (5 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install gnome.org/json-glib`
 * @dependencies `gnome.org/glib^2.78`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gnomeorgjsonglib
 * console.log(pkg.name)        // "gnome.org/json-glib"
 * console.log(pkg.versions[0]) // "1.10.8" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnome-org/json-glib.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gnomeorgjsonglibPackage = {
  /**
   * The display name of this package.
   */
  name: 'gnome.org/json-glib' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnome.org/json-glib' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnome.org/json-glib/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gnome.org/json-glib' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnome.org/glib^2.78',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.10.8',
    '1.10.6',
    '1.10.0',
    '1.9.2',
    '1.8.0',
  ] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +gnome.org/json-glib -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gnome.org/json-glib' as const,
}

export type GnomeorgjsonglibPackage = typeof gnomeorgjsonglibPackage
