/**
 * **atk** - Package from pantry: gnome.org/atk
 *
 * @domain `gnome.org/atk`
 *
 * @install `launchpad install gnome.org/atk`
 * @dependencies `gnome.org/glib@2`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gnomeorgatk
 * console.log(pkg.name)        // "atk"
 * console.log(pkg.description) // "Package from pantry: gnome.org/atk"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnome-org/atk.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gnomeorgatkPackage = {
  /**
   * The display name of this package.
   */
  name: 'atk' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnome.org/atk' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: gnome.org/atk' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gnome.org/atk' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +gnome.org/atk -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gnome.org/atk' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnome.org/glib@2',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnome.org/atk/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GnomeorgatkPackage = typeof gnomeorgatkPackage
