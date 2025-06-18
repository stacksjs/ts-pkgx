/**
 * **github.com/greenpau/go-redfish-api-idrac** - pkgx package
 *
 * @domain `github.com/greenpau/go/redfish-api-idrac`
 *
 * @install `pkgx github.com/greenpau/go-redfish-api-idrac`
 * @aliases `github.com/greenpau/go-redfish-api-idrac`, `greenpau/go-redfish-api-idrac`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomgreenpaugoredfishapiidrac
 * // Or access via domain
 * const samePkg = pantry.githubcomgreenpaugoredfishapiidrac
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "greenpau"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/greenpau/go/redfish-api-idrac.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomgreenpaugoredfishapiidracPackage = {
  /**
   * The display name of this package.
   */
  name: 'greenpau' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/greenpau/go/redfish-api-idrac' as const,
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
  installCommand: 'pkgx github.com/greenpau/go-redfish-api-idrac' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/greenpau/go-redfish-api-idrac',
    'greenpau/go-redfish-api-idrac',
  ] as const,
  fullPath: 'github.com/greenpau/go-redfish-api-idrac' as const,
}

export type GithubcomgreenpaugoredfishapiidracPackage = typeof githubcomgreenpaugoredfishapiidracPackage
