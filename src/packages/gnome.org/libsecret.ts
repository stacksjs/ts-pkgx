/**
 * **libsecret** - pkgx package
 *
 * @domain `gnome.org/libsecret`
 * @version `0.21.7` (7 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +gnome.org/libsecret -- $SHELL -i`
 * @aliases `libsecret`
 * @dependencies `gnome.org/glib`, `gnupg.org/libgcrypt`, `gnupg.org/libgpg-error`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.libsecret
 * // Or access via domain
 * const samePkg = pantry.gnomeorglibsecret
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "gnome.org/libsecret"
 * console.log(pkg.versions[0]) // "0.21.7" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnome-org/libsecret.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libsecretPackage = {
  /**
   * The display name of this package.
   */
  name: 'gnome.org/libsecret' as const,
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
  installCommand: 'sh <(curl https://pkgx.sh) +gnome.org/libsecret -- $SHELL -i' as const,
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
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'libsecret',
  ] as const,
  fullPath: 'gnome.org/libsecret' as const,
}

export type LibsecretPackage = typeof libsecretPackage
