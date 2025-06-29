/**
 * **gettext** - Package from pantry: gnu.org/gettext
 *
 * @domain `gnu.org/gettext`
 *
 * @install `launchpad install gnu.org/gettext`
 * @dependencies `gnome.org/libxml2~2.13 # 2.14 changes the API`, `tukaani.org/xz^5 # autopoint needs this to unpack archives`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gnuorggettext
 * console.log(pkg.name)        // "gettext"
 * console.log(pkg.description) // "Package from pantry: gnu.org/gettext"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/gettext.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gnuorggettextPackage = {
  /**
   * The display name of this package.
   */
  name: 'gettext' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnu.org/gettext' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: gnu.org/gettext' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gnu.org/gettext' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +gnu.org/gettext -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gnu.org/gettext' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnome.org/libxml2~2.13 # 2.14 changes the API',
    'tukaani.org/xz^5 # autopoint needs this to unpack archives',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/gettext/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GnuorggettextPackage = typeof gnuorggettextPackage
