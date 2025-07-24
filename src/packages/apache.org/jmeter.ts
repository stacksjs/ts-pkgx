/**
 * **jmeter** - Package from pantry: apache.org/jmeter
 *
 * @domain `apache.org/jmeter`
 *
 * @install `launchpad install apache.org/jmeter`
 * @dependencies `openjdk.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.apacheorgjmeter
 * console.log(pkg.name)        // "jmeter"
 * console.log(pkg.description) // "Package from pantry: apache.org/jmeter"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/apache-org/jmeter.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const apacheorgjmeterPackage = {
  /**
   * The display name of this package.
   */
  name: 'jmeter' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'apache.org/jmeter' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: apache.org/jmeter' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install apache.org/jmeter' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +apache.org/jmeter -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install apache.org/jmeter' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openjdk.org',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/apache.org/jmeter/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type ApacheorgjmeterPackage = typeof apacheorgjmeterPackage
