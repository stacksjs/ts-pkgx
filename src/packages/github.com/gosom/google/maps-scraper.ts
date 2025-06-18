/**
 * **github.com/gosom/google-maps-scraper** - pkgx package
 *
 * @domain `github.com/gosom/google/maps-scraper`
 *
 * @install `pkgx github.com/gosom/google-maps-scraper`
 * @aliases `github.com/gosom/google-maps-scraper`, `gosom/google-maps-scraper`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomgosomgooglemapsscraper
 * // Or access via domain
 * const samePkg = pantry.githubcomgosomgooglemapsscraper
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "gosom"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/gosom/google/maps-scraper.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomgosomgooglemapsscraperPackage = {
  /**
   * The display name of this package.
   */
  name: 'gosom' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/gosom/google/maps-scraper' as const,
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
  installCommand: 'pkgx github.com/gosom/google-maps-scraper' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/gosom/google-maps-scraper',
    'gosom/google-maps-scraper',
  ] as const,
  fullPath: 'github.com/gosom/google-maps-scraper' as const,
}

export type GithubcomgosomgooglemapsscraperPackage = typeof githubcomgosomgooglemapsscraperPackage
