/**
 * **libsecret** - pkgx package
 *
 * @domain `gnome.org/libsecret`
 * @version `0.21.7` (7 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +gnome.org/libsecret -- $SHELL -i`
 * @dependencies `gnome.org/glib`, `gnupg.org/libgcrypt`, `gnupg.org/libgpg-error`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gnomeorglibsecret
 * console.log(pkg.name)        // "libsecret"
 * console.log(pkg.versions[0]) // "0.21.7" (latest)
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
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnome.org/libsecret/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +gnome.org/libsecret -- $SHELL -i' as const,
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
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.21.7',
    '0.21.6',
    '0.21.5',
    '0.21.4',
    '0.21.3',
    '0.21.2',
    '0.21.1',
  ] as const,
  aliases: [] as const,
}

export type GnomeorglibsecretPackage = typeof gnomeorglibsecretPackage
