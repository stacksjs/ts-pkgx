/**
 * **lerc** - Limited Error Raster Compression
 *
 * @domain `github.com/Esri/lerc`
 * @version `4.0.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +github.com/Esri/lerc -- $SHELL -i`
 * @dependencies `cmake.org`, `freedesktop.org/pkg-config`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomesrilerc
 * console.log(pkg.name)        // "lerc"
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
  name: 'lerc' as const,
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
  installCommand: 'launchpad install +github.com/Esri/lerc -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'cmake.org',
    'freedesktop.org/pkg-config',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '4.0.0',
  ] as const,
  aliases: [] as const,
}

export type GithubcomesrilercPackage = typeof githubcomesrilercPackage
