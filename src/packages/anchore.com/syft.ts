/**
 * **syft** - CLI tool and library for generating a Software Bill of Materials from container images and filesystems
 *
 * @domain `anchore.com/syft`
 * @programs `syft`
 * @version `1.32.0` (47 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install syft`
 * @name `syft`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.syft
 * // Or access via domain
 * const samePkg = pantry.anchorecomsyft
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "syft"
 * console.log(pkg.description) // "CLI tool and library for generating a Software ..."
 * console.log(pkg.programs)    // ["syft"]
 * console.log(pkg.versions[0]) // "1.32.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/anchore-com/syft.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const syftPackage = {
  /**
   * The display name of this package.
   */
  name: 'syft' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'anchore.com/syft' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'CLI tool and library for generating a Software Bill of Materials from container images and filesystems' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/anchore.com/syft/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/anchore/syft' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install syft' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'syft',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.32.0',
    '1.31.0',
    '1.30.0',
    '1.29.1',
    '1.29.0',
    '1.28.0',
    '1.27.1',
    '1.27.0',
    '1.26.1',
    '1.26.0',
    '1.25.1',
    '1.25.0',
    '1.24.0',
    '1.23.1',
    '1.23.0',
    '1.22.0',
    '1.21.0',
    '1.20.0',
    '1.19.0',
    '1.18.1',
    '1.18.0',
    '1.17.0',
    '1.16.0',
    '1.15.0',
    '1.14.2',
    '1.14.1',
    '1.14.0',
    '1.13.0',
    '1.12.2',
    '1.11.1',
    '1.11.0',
    '1.10.0',
    '1.9.0',
    '1.8.0',
    '1.7.0',
    '1.6.0',
    '1.5.0',
    '1.4.1',
    '1.4.0',
    '1.3.0',
    '1.2.0',
    '1.1.1',
    '1.1.0',
    '1.0.1',
    '1.0.0',
    '0.105.1',
    '0.105.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) syft -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install syft' as const,
}

export type SyftPackage = typeof syftPackage
