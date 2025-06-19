/**
 * **go-redfish-api-idrac-client** - iDRAC Redfish API client library written in Go.
 *
 * @domain `github.com/greenpau/go-redfish-api-idrac`
 * @programs `go-redfish-api-idrac-client`
 * @version `1.0.6` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install go-redfish-api-idrac-client`
 * @name `go-redfish-api-idrac`
 * @aliases `go-redfish-api-idrac-client`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.goredfishapiidracclient
 * // Or access via domain
 * const samePkg = pantry.githubcomgreenpaugoredfishapiidrac
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "go-redfish-api-idrac"
 * console.log(pkg.description) // "iDRAC Redfish API client library written in Go."
 * console.log(pkg.programs)    // ["go-redfish-api-idrac-client"]
 * console.log(pkg.versions[0]) // "1.0.6" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/greenpau/go-redfish-api-idrac.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const goredfishapiidracclientPackage = {
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
  description: 'iDRAC Redfish API client library written in Go.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/greenpau/go-redfish-api-idrac/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install go-redfish-api-idrac-client' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'go-redfish-api-idrac-client',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.0.6',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'go-redfish-api-idrac-client',
  ] as const,
}

export type GoredfishapiidracclientPackage = typeof goredfishapiidracclientPackage
