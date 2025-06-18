/**
 * **rucio.cern.ch/rucio-client** - pkgx package
 *
 * @domain `rucio.cern.ch/rucio/client`
 *
 * @install `pkgx rucio.cern.ch/rucio-client`
 * @name `rucio-client`
 * @aliases `rucio.cern.ch/rucio-client`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.ruciocernchrucioclient
 * // Or access via domain
 * const samePkg = pantry.ruciocernchrucioclient
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "rucio-client"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/rucio-cern-ch/rucio/client.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ruciocernchrucioclientPackage = {
  /**
   * The display name of this package.
   */
  name: 'rucio-client' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'rucio.cern.ch/rucio/client' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx rucio.cern.ch/rucio-client' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'rucio.cern.ch/rucio-client',
  ] as const,
  fullPath: 'rucio.cern.ch/rucio-client' as const,
}

export type RuciocernchrucioclientPackage = typeof ruciocernchrucioclientPackage
