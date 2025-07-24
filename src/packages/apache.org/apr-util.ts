/**
 * **apr-util** - Package from pantry: apache.org/apr-util
 *
 * @domain `apache.org/apr-util`
 *
 * @install `launchpad install apache.org/apr-util`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.apacheorgaprutil
 * console.log(pkg.name)        // "apr-util"
 * console.log(pkg.description) // "Package from pantry: apache.org/apr-util"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/apache-org/apr-util.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const apacheorgaprutilPackage = {
  /**
   * The display name of this package.
   */
  name: 'apr-util' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'apache.org/apr-util' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: apache.org/apr-util' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install apache.org/apr-util' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +apache.org/apr-util -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install apache.org/apr-util' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/apache.org/apr-util/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type ApacheorgaprutilPackage = typeof apacheorgaprutilPackage
