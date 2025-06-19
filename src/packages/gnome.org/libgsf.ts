/**
 * **gsf** - I/O abstraction library for dealing with structured file formats
 *
 * @domain `gnome.org/libgsf`
 * @programs `gsf`, `gsf-office-thumbnailer`, `gsf-vba-dump`
 * @version `1.14.53` (4 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +gnome.org/libgsf -- $SHELL -i`
 * @aliases `gsf`
 * @dependencies `gnome.org/glib`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.gsf
 * // Or access via domain
 * const samePkg = pantry.gnomeorglibgsf
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "libgsf"
 * console.log(pkg.description) // "I/O abstraction library for dealing with struct..."
 * console.log(pkg.programs)    // ["gsf", "gsf-office-thumbnailer", ...]
 * console.log(pkg.versions[0]) // "1.14.53" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnome-org/libgsf.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gsfPackage = {
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
  description: 'I/O abstraction library for dealing with structured file formats' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnome.org/libgsf/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install +gnome.org/libgsf -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'gsf',
    'gsf-office-thumbnailer',
    'gsf-vba-dump',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnome.org/glib',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.14.53',
    '1.14.52',
    '1.14.51',
    '1.14.50',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'gsf',
  ] as const,
}

export type GsfPackage = typeof gsfPackage
