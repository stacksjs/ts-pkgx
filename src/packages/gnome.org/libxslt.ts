/**
 * **libxslt** - Package from pantry: gnome.org/libxslt
 *
 * @domain `gnome.org/libxslt`
 *
 * @install `launchpad install gnome.org/libxslt`
 * @dependencies `gnome.org/libxml2`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gnomeorglibxslt
 * console.log(pkg.name)        // "libxslt"
 * console.log(pkg.description) // "Package from pantry: gnome.org/libxslt"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnome-org/libxslt.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gnomeorglibxsltPackage = {
  /**
   * The display name of this package.
   */
  name: 'libxslt' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnome.org/libxslt' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: gnome.org/libxslt' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gnome.org/libxslt' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +gnome.org/libxslt -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gnome.org/libxslt' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnome.org/libxml2',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnome.org/libxslt/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GnomeorglibxsltPackage = typeof gnomeorglibxsltPackage
