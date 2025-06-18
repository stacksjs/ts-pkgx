/**
 * **github.com/esri/lerc** - Limited Error Raster Compression
 *
 * @domain `github.com/Esri/lerc`
 * @version `4.0.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +github.com/Esri/lerc -- $SHELL -i`
 * @aliases `github.com/esri/lerc`, `Esri/lerc`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomesrilerc
 * // Or access via domain
 * const samePkg = pantry.githubcomesrilerc
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "github.com/Esri/lerc"
 * console.log(pkg.description) // "Limited Error Raster Compression"
 * console.log(pkg.versions[0]) // "4.0.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/Esri/lerc.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomesrilercPackage = {
  /**
   * The display name of this package.
   */
  name: 'github.com/Esri/lerc' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/Esri/lerc' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Limited Error Raster Compression' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/Esri/lerc/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +github.com/Esri/lerc -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '4.0.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/esri/lerc',
    'Esri/lerc',
  ] as const,
  fullPath: 'github.com/Esri/lerc' as const,
}

export type GithubcomesrilercPackage = typeof githubcomesrilercPackage
