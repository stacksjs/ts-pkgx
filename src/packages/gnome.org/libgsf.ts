/**
 * **libgsf** - Package from pantry: gnome.org/libgsf
 *
 * @domain `gnome.org/libgsf`
 *
 * @install `launchpad install gnome.org/libgsf`
 * @dependencies `gnome.org/glib`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gnomeorglibgsf
 * console.log(pkg.name)        // "libgsf"
 * console.log(pkg.description) // "Package from pantry: gnome.org/libgsf"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnome-org/libgsf.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gnomeorglibgsfPackage = {
  /**
   * The display name of this package.
   */
  name: 'libgsf' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnome.org/libgsf' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: gnome.org/libgsf' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gnome.org/libgsf' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +gnome.org/libgsf -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gnome.org/libgsf' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnome.org/glib',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnome.org/libgsf/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GnomeorglibgsfPackage = typeof gnomeorglibgsfPackage
