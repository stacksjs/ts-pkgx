/**
 * **doctl** - The official command line interface for the DigitalOcean API.
 *
 * @domain `digitalocean.com/doctl`
 * @programs `doctl`
 * @version `2.59.3` (40 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install doctl`
 * @name `doctl`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.doctl
 * // Or access via domain
 * const samePkg = pantry.digitaloceancomdoctl
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "doctl"
 * console.log(pkg.description) // "The official command line interface for the Dig..."
 * console.log(pkg.programs)    // ["doctl"]
 * console.log(pkg.versions[0]) // "2.59.3" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/digitalocean-com/doctl.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const doctlPackage = {
  /**
   * The display name of this package.
   */
  name: 'doctl' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'digitalocean.com/doctl' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'The official command line interface for the DigitalOcean API.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/digitalocean.com/doctl/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install doctl' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'doctl',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.59.3',
    '2.59.2',
    '1.135.0',
    '1.134.0',
    '1.133.0',
    '1.132.0',
    '1.131.0',
    '1.130.0',
    '1.129.0',
    '1.128.0',
    '1.127.0',
    '1.126.0',
    '1.125.1',
    '1.125.0',
    '1.124.0',
    '1.123.0',
    '1.122.0',
    '1.121.0',
    '1.120.2',
    '1.120.1',
    '1.120.0',
    '1.119.1',
    '1.119.0',
    '1.118.0',
    '1.117.0',
    '1.116.1',
    '1.116.0',
    '1.115.0',
    '1.114.0',
    '1.113.0',
    '1.112.0',
    '1.111.0',
    '1.110.0',
    '1.109.1',
    '1.109.0',
    '1.108.0',
    '1.107.0',
    '1.106.0',
    '1.105.0',
    '1.104.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) doctl -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install doctl' as const,
}

export type DoctlPackage = typeof doctlPackage
