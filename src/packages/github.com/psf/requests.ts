/**
 * **github.com/psf/requests** - A simple, yet elegant, HTTP library.
 *
 * @domain `github.com/psf/requests`
 * @version `2.32.4` (6 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install github.com/psf/requests`
 * @dependencies `python.org~3.11`, `github.com/Ousret/charset_normalizer^3`, `github.com/kjd/idna^3`, ... (+2 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcompsfrequests
 * console.log(pkg.name)        // "github.com/psf/requests"
 * console.log(pkg.description) // "A simple, yet elegant, HTTP library."
 * console.log(pkg.versions[0]) // "2.32.4" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/psf/requests.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcompsfrequestsPackage = {
  /**
   * The display name of this package.
   */
  name: 'github.com/psf/requests' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/psf/requests' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A simple, yet elegant, HTTP library.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/psf/requests/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/psf/requests' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org~3.11',
    'github.com/Ousret/charset_normalizer^3',
    'github.com/kjd/idna^3',
    'github.com/urllib3/urllib3^2',
    'certifi.io/python-certifi^2024',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.32.4',
    '2.32.3',
    '2.32.2',
    '2.32.1',
    '2.32.0',
    '2.31.0',
  ] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/psf/requests -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/psf/requests' as const,
}

export type GithubcompsfrequestsPackage = typeof githubcompsfrequestsPackage
