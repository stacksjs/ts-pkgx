/**
 * **libxml2** - Package from pantry: gnome.org/libxml2
 *
 * @domain `gnome.org/libxml2`
 *
 * @install `launchpad install gnome.org/libxml2`
 * @dependencies `zlib.net^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gnomeorglibxml2
 * console.log(pkg.name)        // "libxml2"
 * console.log(pkg.description) // "Package from pantry: gnome.org/libxml2"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnome-org/libxml2.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gnomeorglibxml2Package = {
  /**
   * The display name of this package.
   */
  name: 'libxml2' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnome.org/libxml2' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: gnome.org/libxml2' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gnome.org/libxml2' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +gnome.org/libxml2 -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gnome.org/libxml2' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'zlib.net^1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnome.org/libxml2/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Gnomeorglibxml2Package = typeof gnomeorglibxml2Package
