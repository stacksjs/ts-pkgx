/**
 * **pocket** - Official implementation of the Pocket Network Protocol
 *
 * @domain `pokt.network`
 * @programs `pocket`
 * @version `0.12.0` (8 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/pokt-network.md
 *
 * @install `sh <(curl https://pkgx.sh) pocket`
 * @name `pocket`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.pocket
 * // Or access via domain
 * const samePkg = pantry.poktnetwork
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "pocket"
 * console.log(pkg.description) // "Official implementation of the Pocket Network P..."
 * console.log(pkg.programs)    // ["pocket"]
 * console.log(pkg.versions[0]) // "0.12.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pokt-network.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pocketPackage = {
  /**
   * The display name of this package.
   */
  name: 'pocket' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'pokt.network' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Official implementation of the Pocket Network Protocol' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/pokt.network/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) pocket' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'pocket',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.12.0',
    '0.11.3',
    '0.11.2',
    '0.11.1',
    '0.10.4',
    '0.10.3',
    '0.10.0',
    '0.9.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'pokt.network' as const,
}

export type PocketPackage = typeof pocketPackage
