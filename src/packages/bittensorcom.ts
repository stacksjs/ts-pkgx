/**
 * **Bittensor** - Internet-scale Neural Networks
 *
 * @domain `bittensor.com`
 * @version `9.8.3` (67 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install Bittensor`
 * @name `Bittensor`
 * @dependencies `pkgx.sh^1`, `openssl.org^1.1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.Bittensor
 * // Or access via domain
 * const samePkg = pantry.bittensorcom
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "Bittensor"
 * console.log(pkg.description) // "Internet-scale Neural Networks"
 * console.log(pkg.versions[0]) // "9.8.3" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/bittensor-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const bittensorPackage = {
  /**
   * The display name of this package.
   */
  name: 'Bittensor' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'bittensor.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Internet-scale Neural Networks' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/bittensor.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install Bittensor' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pkgx.sh^1',
    'openssl.org^1.1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '9.8.3',
    '9.8.2',
    '9.8.1',
    '9.8.0',
    '9.7.0',
    '9.6.1',
    '9.6.0',
    '9.5.0',
    '9.4.0',
    '9.3.0',
    '9.2.0',
    '9.1.0',
    '9.0.4',
    '9.0.3',
    '9.0.2',
    '9.0.1',
    '9.0.0',
    '8.5.2',
    '8.5.1',
    '8.5.0',
    '8.4.5',
    '8.4.4',
    '8.4.3',
    '8.4.2',
    '8.4.1',
    '8.4.0',
    '8.3.1',
    '8.3.0',
    '8.2.1',
    '8.2.0',
    '8.1.1',
    '8.1.0',
    '8.0.0',
    '7.4.0',
    '7.3.1',
    '7.3.0',
    '7.2.1',
    '7.2.0',
    '7.1.2',
    '7.1.1',
    '7.1.0',
    '7.0.2',
    '7.0.1',
    '7.0.0',
    '6.12.4',
    '6.12.3',
    '6.12.2',
    '6.12.1',
    '6.12.0',
    '6.11.1',
    '6.11.0',
    '6.10.2',
    '6.10.1',
    '6.10.0',
    '6.9.4',
    '6.9.3',
    '6.9.2',
    '6.9.1',
    '6.9.0',
    '6.8.2',
    '6.8.1',
    '6.8.0',
    '6.7.3',
    '6.7.2',
    '6.7.1',
    '6.7.0',
    '6.5.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +bittensor.com -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install Bittensor' as const,
}

export type BittensorPackage = typeof bittensorPackage
