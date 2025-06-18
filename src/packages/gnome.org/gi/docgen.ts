/**
 * **gnome.org/gi-docgen** - pkgx package
 *
 * @domain `gnome.org/gi/docgen`
 *
 * @install `pkgx gnome.org/gi-docgen`
 * @name `gi-docgen`
 * @aliases `gnome.org/gi-docgen`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.gnomeorggidocgen
 * // Or access via domain
 * const samePkg = pantry.gnomeorggidocgen
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "gi-docgen"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnome-org/gi/docgen.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gnomeorggidocgenPackage = {
  /**
   * The display name of this package.
   */
  name: 'gi-docgen' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnome.org/gi/docgen' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx gnome.org/gi-docgen' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'gnome.org/gi-docgen',
  ] as const,
  fullPath: 'gnome.org/gi-docgen' as const,
}

export type GnomeorggidocgenPackage = typeof gnomeorggidocgenPackage
