/**
 * **pscale** - The CLI for PlanetScale Database
 *
 * @domain `planetscale.com`
 * @programs `pscale`
 * @version `0.254.0` (77 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install pscale`
 * @name `pscale`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.pscale
 * // Or access via domain
 * const samePkg = pantry.planetscalecom
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "pscale"
 * console.log(pkg.description) // "The CLI for PlanetScale Database"
 * console.log(pkg.programs)    // ["pscale"]
 * console.log(pkg.versions[0]) // "0.254.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/planetscale-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pscalePackage = {
  /**
   * The display name of this package.
   */
  name: 'pscale' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'planetscale.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'The CLI for PlanetScale Database' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/planetscale.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install pscale' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'pscale',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.254.0',
    '0.253.0',
    '0.252.0',
    '0.251.0',
    '0.250.0',
    '0.249.0',
    '0.247.0',
    '0.246.0',
    '0.245.0',
    '0.244.0',
    '0.243.0',
    '0.242.0',
    '0.241.0',
    '0.240.0',
    '0.239.0',
    '0.238.0',
    '0.237.0',
    '0.236.0',
    '0.235.0',
    '0.234.0',
    '0.233.0',
    '0.230.0',
    '0.229.0',
    '0.228.0',
    '0.227.0',
    '0.226.0',
    '0.225.0',
    '0.224.0',
    '0.223.0',
    '0.222.0',
    '0.221.0',
    '0.220.0',
    '0.219.0',
    '0.218.0',
    '0.217.0',
    '0.216.0',
    '0.215.0',
    '0.214.0',
    '0.213.0',
    '0.212.0',
    '0.211.0',
    '0.210.0',
    '0.209.0',
    '0.208.0',
    '0.207.0',
    '0.206.0',
    '0.205.0',
    '0.204.0',
    '0.197.0',
    '0.196.0',
    '0.195.0',
    '0.194.0',
    '0.193.0',
    '0.192.0',
    '0.191.0',
    '0.190.0',
    '0.189.0',
    '0.188.0',
    '0.187.0',
    '0.186.0',
    '0.185.0',
    '0.183.0',
    '0.182.0',
    '0.181.0',
    '0.178.0',
    '0.177.0',
    '0.176.0',
    '0.175.0',
    '0.174.0',
    '0.172.0',
    '0.171.0',
    '0.169.0',
    '0.168.0',
    '0.165.0',
    '0.163.0',
    '0.162.0',
    '0.161.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) pscale -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install pscale' as const,
}

export type PscalePackage = typeof pscalePackage
