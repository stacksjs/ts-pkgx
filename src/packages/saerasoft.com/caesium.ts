/**
 * **caesiumclt** - Caesium Command Line Tools - Lossy/lossless image compression tool
 *
 * @domain `saerasoft.com/caesium`
 * @programs `caesiumclt`
 * @version `1.0.1` (7 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install caesiumclt`
 * @name `caesiumclt`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.caesiumclt
 * // Or access via domain
 * const samePkg = pantry.saerasoftcomcaesium
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "caesiumclt"
 * console.log(pkg.description) // "Caesium Command Line Tools - Lossy/lossless ima..."
 * console.log(pkg.programs)    // ["caesiumclt"]
 * console.log(pkg.versions[0]) // "1.0.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/saerasoft-com/caesium.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const caesiumcltPackage = {
  /**
   * The display name of this package.
   */
  name: 'caesiumclt' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'saerasoft.com/caesium' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Caesium Command Line Tools - Lossy/lossless image compression tool' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/saerasoft.com/caesium/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install caesiumclt' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'caesiumclt',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.0.1',
    '1.0.0',
    '0.21.0',
    '0.20.0',
    '0.19.3',
    '0.19.2',
    '0.19.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) caesiumclt -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install caesiumclt' as const,
}

export type CaesiumcltPackage = typeof caesiumcltPackage
