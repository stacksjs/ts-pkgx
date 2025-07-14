/**
 * **glib** - Package from pantry: gnome.org/glib
 *
 * @domain `gnome.org/glib`
 *
 * @install `launchpad install gnome.org/glib`
 * @dependencies `gnu.org/gettext^0.21`, `sourceware.org/libffi@3`, `pcre.org@8`, ... (+2 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gnomeorgglib
 * console.log(pkg.name)        // "glib"
 * console.log(pkg.description) // "Package from pantry: gnome.org/glib"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnome-org/glib.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gnomeorgglibPackage = {
  /**
   * The display name of this package.
   */
  name: 'glib' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnome.org/glib' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: gnome.org/glib' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gnome.org/glib' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +gnome.org/glib -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gnome.org/glib' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnu.org/gettext^0.21',
    'sourceware.org/libffi@3',
    'pcre.org@8',
    'pcre.org/v2@10',
    'python.org^3 # several of the bins are scripts',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnome.org/glib/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GnomeorgglibPackage = typeof gnomeorgglibPackage
