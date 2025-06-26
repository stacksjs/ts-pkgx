/**
 * **libsecret** - Package from pantry: gnome.org/libsecret
 *
 * @domain `gnome.org/libsecret`
 *
 * @install `launchpad install gnome.org/libsecret`
 * @dependencies `gnome.org/glib`, `gnupg.org/libgcrypt`, `gnupg.org/libgpg-error`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gnomeorglibsecret
 * console.log(pkg.name)        // "libsecret"
 * console.log(pkg.description) // "Package from pantry: gnome.org/libsecret"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnome-org/libsecret.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gnomeorglibsecretPackage = {
  /**
   * The display name of this package.
   */
  name: 'libsecret' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnome.org/libsecret' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: gnome.org/libsecret' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gnome.org/libsecret' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +gnome.org/libsecret -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gnome.org/libsecret' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnome.org/glib',
    'gnupg.org/libgcrypt',
    'gnupg.org/libgpg-error',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnome.org/libsecret/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GnomeorglibsecretPackage = typeof gnomeorglibsecretPackage
