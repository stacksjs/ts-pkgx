/**
 * **apache.org/serf** - pkgx package
 *
 * @domain `apache.org/serf`
 * @version `1.3.10` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install apache.org/serf`
 * @dependencies `apache.org/apr^1`, `apache.org/apr-util^1`, `openssl.org^1.1`, ... (+3 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.apacheorgserf
 * console.log(pkg.name)        // "apache.org/serf"
 * console.log(pkg.versions[0]) // "1.3.10" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/apache-org/serf.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const apacheorgserfPackage = {
  /**
   * The display name of this package.
   */
  name: 'apache.org/serf' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'apache.org/serf' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/apache.org/serf/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install apache.org/serf' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'apache.org/apr^1',
    'apache.org/apr-util^1',
    'openssl.org^1.1',
    'zlib.net^1.2',
    'kerberos.org^1.20',
    'libexpat.github.io^2',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.3.10',
  ] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +apache.org/serf -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install apache.org/serf' as const,
}

export type ApacheorgserfPackage = typeof apacheorgserfPackage
