/**
 * **atk** - pkgx package
 *
 * @domain `gnome.org/atk`
 * @version `2.38.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +gnome.org/atk -- $SHELL -i`
 * @aliases `atk`
 * @dependencies `gnome.org/glib@2`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.atk
 * // Or access via domain
 * const samePkg = pantry.gnomeorgatk
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "gnome.org/atk"
 * console.log(pkg.versions[0]) // "2.38.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnome-org/atk.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const atkPackage = {
  /**
   * The display name of this package.
   */
  name: 'gnome.org/atk' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnome.org/atk' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnome.org/atk/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +gnome.org/atk -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnome.org/glib@2',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.38.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'atk',
  ] as const,
  fullPath: 'gnome.org/atk' as const,
}

export type AtkPackage = typeof atkPackage
