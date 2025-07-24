/**
 * **go-redfish-api-idrac** - Package from pantry: github.com/greenpau/go-redfish-api-idrac
 *
 * @domain `github.com/greenpau/go-redfish-api-idrac`
 *
 * @install `launchpad install github.com/greenpau/go-redfish-api-idrac`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomgreenpaugoredfishapiidrac
 * console.log(pkg.name)        // "go-redfish-api-idrac"
 * console.log(pkg.description) // "Package from pantry: github.com/greenpau/go-red..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/greenpau/go-redfish-api-idrac.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomgreenpaugoredfishapiidracPackage = {
  /**
   * The display name of this package.
   */
  name: 'go-redfish-api-idrac' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/greenpau/go-redfish-api-idrac' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/greenpau/go-redfish-api-idrac' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/greenpau/go-redfish-api-idrac' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/greenpau/go-redfish-api-idrac -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/greenpau/go-redfish-api-idrac' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/greenpau/go-redfish-api-idrac/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomgreenpaugoredfishapiidracPackage = typeof githubcomgreenpaugoredfishapiidracPackage
