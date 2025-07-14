/**
 * **google-maps-scraper** - Package from pantry: github.com/gosom/google-maps-scraper
 *
 * @domain `github.com/gosom/google-maps-scraper`
 *
 * @install `launchpad install github.com/gosom/google-maps-scraper`
 * @dependencies `curl.se/ca-certs`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomgosomgooglemapsscraper
 * console.log(pkg.name)        // "google-maps-scraper"
 * console.log(pkg.description) // "Package from pantry: github.com/gosom/google-ma..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/gosom/google-maps-scraper.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomgosomgooglemapsscraperPackage = {
  /**
   * The display name of this package.
   */
  name: 'google-maps-scraper' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/gosom/google-maps-scraper' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/gosom/google-maps-scraper' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/gosom/google-maps-scraper' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/gosom/google-maps-scraper -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/gosom/google-maps-scraper' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'curl.se/ca-certs',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/gosom/google-maps-scraper/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomgosomgooglemapsscraperPackage = typeof githubcomgosomgooglemapsscraperPackage
