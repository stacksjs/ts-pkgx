/**
 * **gnome.org/gi-docgen** - pkgx package
 *
 * @domain `gnome.org/gi-docgen`
 * @version `2025.3.0` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +gnome.org/gi-docgen -- $SHELL -i`
 * @dependencies `pkgx.sh^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gnomeorggidocgen
 * console.log(pkg.name)        // "gnome.org/gi-docgen"
 * console.log(pkg.versions[0]) // "2025.3.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnome-org/gi-docgen.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gnomeorggidocgenPackage = {
  /**
   * The display name of this package.
   */
  name: 'gnome.org/gi-docgen' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnome.org/gi-docgen' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnome.org/gi-docgen/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +gnome.org/gi-docgen -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pkgx.sh^1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2025.3.0',
    '2024.1.0',
  ] as const,
  aliases: [] as const,
  fullPath: 'gnome.org-gi-docgen' as const,
}

export type GnomeorggidocgenPackage = typeof gnomeorggidocgenPackage
