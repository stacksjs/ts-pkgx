/**
 * **steampipe.io** - Package from pantry: steampipe.io
 *
 * @domain `steampipe.io`
 *
 * @install `launchpad install steampipe.io`
 * @dependencies `go.dev^1.21`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.steampipeio
 * console.log(pkg.name)        // "steampipe.io"
 * console.log(pkg.description) // "Package from pantry: steampipe.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/steampipe-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const steampipeioPackage = {
  /**
   * The display name of this package.
   */
  name: 'steampipe.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'steampipe.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: steampipe.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install steampipe.io' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'go.dev^1.21',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/steampipe.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type SteampipeioPackage = typeof steampipeioPackage
