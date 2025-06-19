/**
 * **jmeter** - pkgx package
 *
 * @domain `apache.org/jmeter`
 * @programs `jmeter`, `jmeter-server`, `mirror-server`
 * @version `5.6.3` (3 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +apache.org/jmeter -- $SHELL -i`
 * @dependencies `openjdk.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.apacheorgjmeter
 * console.log(pkg.name)        // "jmeter"
 * console.log(pkg.programs)    // ["jmeter", "jmeter-server", ...]
 * console.log(pkg.versions[0]) // "5.6.3" (latest)
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
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/apache.org/jmeter/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +apache.org/jmeter -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'jmeter',
    'jmeter-server',
    'mirror-server',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openjdk.org',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '5.6.3',
    '5.6.2',
    '5.6.1',
  ] as const,
  aliases: [] as const,
}

export type ApacheorgjmeterPackage = typeof apacheorgjmeterPackage
