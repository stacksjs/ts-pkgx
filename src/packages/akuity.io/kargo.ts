/**
 * **kargo** - Application lifecycle orchestration
 *
 * @domain `akuity.io/kargo`
 * @programs `kargo`
 * @version `1.7.3` (47 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install kargo`
 * @name `kargo`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.kargo
 * // Or access via domain
 * const samePkg = pantry.akuityiokargo
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "kargo"
 * console.log(pkg.description) // "Application lifecycle orchestration"
 * console.log(pkg.programs)    // ["kargo"]
 * console.log(pkg.versions[0]) // "1.7.3" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/akuity-io/kargo.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const kargoPackage = {
  /**
   * The display name of this package.
   */
  name: 'kargo' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'akuity.io/kargo' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Application lifecycle orchestration' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/akuity.io/kargo/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install kargo' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'kargo',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.7.3',
    '1.7.2',
    '1.7.1',
    '1.7.0',
    '1.6.2',
    '1.6.1',
    '1.6.0',
    '1.5.3',
    '1.5.2',
    '1.5.1',
    '1.5.0',
    '1.4.4',
    '1.4.3',
    '1.4.2',
    '1.4.1',
    '1.4.0',
    '1.3.4',
    '1.3.3',
    '1.3.2',
    '1.3.1',
    '1.3.0',
    '1.2.3',
    '1.2.2',
    '1.2.1',
    '1.2.0',
    '1.1.3',
    '1.1.2',
    '1.1.1',
    '1.1.0',
    '1.0.4',
    '1.0.3',
    '1.0.2',
    '1.0.1',
    '1.0.0',
    '0.9.2',
    '0.9.1',
    '0.9.0',
    '0.8.8',
    '0.8.7',
    '0.8.6',
    '0.8.5',
    '0.8.4',
    '0.8.3',
    '0.8.2',
    '0.8.1',
    '0.8.0',
    '0.7.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) kargo -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install kargo' as const,
}

export type KargoPackage = typeof kargoPackage
