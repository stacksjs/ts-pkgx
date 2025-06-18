/**
 * **Esri** - pkgx package
 *
 * @domain `github.com/Esri`
 *
 * @install `pkgx github.com/Esri`
 * @name `Esri`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.Esri
 * // Or access via domain
 * const samePkg = pantry.githubcomesri
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "Esri"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/Esri.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const esriPackage = {
  /**
   * The display name of this package.
   */
  name: 'Esri' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/Esri' as const,
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
  installCommand: 'pkgx github.com/Esri' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/Esri' as const,
}

export type EsriPackage = typeof esriPackage
