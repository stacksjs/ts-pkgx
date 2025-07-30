/**
 * **cirrus** - CLI for executing Cirrus tasks locally and in any CI
 *
 * @domain `github.com/cirruslabs/cirrus-cli`
 * @programs `cirrus`
 * @version `0.147.0` (78 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install cirrus`
 * @name `cirrus`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.cirrus
 * // Or access via domain
 * const samePkg = pantry.githubcomcirruslabscirruscli
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "cirrus"
 * console.log(pkg.description) // "CLI for executing Cirrus tasks locally and in a..."
 * console.log(pkg.programs)    // ["cirrus"]
 * console.log(pkg.versions[0]) // "0.147.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/cirruslabs/cirrus-cli.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cirrusPackage = {
  /**
   * The display name of this package.
   */
  name: 'cirrus' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/cirruslabs/cirrus-cli' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'CLI for executing Cirrus tasks locally and in any CI' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/cirruslabs/cirrus-cli/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install cirrus' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'cirrus',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.147.0',
    '0.146.0',
    '0.145.3',
    '0.145.2',
    '0.145.1',
    '0.145.0',
    '0.144.3',
    '0.144.2',
    '0.144.1',
    '0.144.0',
    '0.143.3',
    '0.143.2',
    '0.143.1',
    '0.143.0',
    '0.142.1',
    '0.142.0',
    '0.141.0',
    '0.140.8',
    '0.140.7',
    '0.140.6',
    '0.140.5',
    '0.140.4',
    '0.140.3',
    '0.140.2',
    '0.140.1',
    '0.140.0',
    '0.139.2',
    '0.139.1',
    '0.139.0',
    '0.138.3',
    '0.138.2',
    '0.138.1',
    '0.138.0',
    '0.137.4',
    '0.137.3',
    '0.137.2',
    '0.137.1',
    '0.137.0',
    '0.136.0',
    '0.135.0',
    '0.134.0',
    '0.133.2',
    '0.133.1',
    '0.133.0',
    '0.132.0',
    '0.131.2',
    '0.131.1',
    '0.131.0',
    '0.130.2',
    '0.130.1',
    '0.130.0',
    '0.129.1',
    '0.129.0',
    '0.128.0',
    '0.127.1',
    '0.127.0',
    '0.126.1',
    '0.126.0',
    '0.125.1',
    '0.125.0',
    '0.124.3',
    '0.124.2',
    '0.124.1',
    '0.123.0',
    '0.122.4',
    '0.122.3',
    '0.122.2',
    '0.122.1',
    '0.122.0',
    '0.121.0',
    '0.120.6',
    '0.120.5',
    '0.120.4',
    '0.120.3',
    '0.120.2',
    '0.120.1',
    '0.120.0',
    '0.119.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) cirrus -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install cirrus' as const,
}

export type CirrusPackage = typeof cirrusPackage
