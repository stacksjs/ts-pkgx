/**
 * **apr** - Package from pantry: apache.org/apr
 *
 * @domain `apache.org/apr`
 *
 * @install `launchpad install apache.org/apr`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.apacheorgapr
 * console.log(pkg.name)        // "apr"
 * console.log(pkg.description) // "Package from pantry: apache.org/apr"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/apache-org/apr.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const apacheorgaprPackage = {
  /**
   * The display name of this package.
   */
  name: 'apr' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'apache.org/apr' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: apache.org/apr' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install apache.org/apr' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +apache.org/apr -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install apache.org/apr' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/apache.org/apr/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type ApacheorgaprPackage = typeof apacheorgaprPackage
