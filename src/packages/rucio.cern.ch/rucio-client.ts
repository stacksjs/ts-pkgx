/**
 * **rucio-client** - Rucio - Scientific Data Management
 *
 * @domain `rucio.cern.ch/rucio-client`
 * @programs `rucio`, `rucio-admin`
 * @version `37.5.0` (27 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +rucio.cern.ch/rucio-client -- $SHELL -i`
 * @name `rucio-client`
 * @dependencies `pkgx.sh^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.rucioclient
 * // Or access via domain
 * const samePkg = pantry.ruciocernchrucioclient
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "rucio-client"
 * console.log(pkg.description) // "Rucio - Scientific Data Management"
 * console.log(pkg.programs)    // ["rucio", "rucio-admin"]
 * console.log(pkg.versions[0]) // "37.5.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/rucio-cern-ch/rucio-client.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const rucioclientPackage = {
  /**
   * The display name of this package.
   */
  name: 'rucio-client' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'rucio.cern.ch/rucio-client' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Rucio - Scientific Data Management' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/rucio.cern.ch/rucio-client/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +rucio.cern.ch/rucio-client -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'rucio',
    'rucio-admin',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pkgx.sh^1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '37.5.0',
    '37.4.0',
    '37.3.0',
    '37.2.0',
    '37.1.0',
    '37.0.0',
    '36.5.0',
    '36.4.0',
    '36.3.0',
    '36.2.0',
    '36.1.0',
    '35.7.0',
    '35.6.1',
    '35.6.0',
    '35.5.0',
    '35.4.1',
    '35.4.0',
    '35.3.0',
    '35.2.1',
    '35.2.0',
    '35.1.1',
    '35.1.0',
    '35.0.1',
    '35.0.0',
    '34.6.0',
    '34.5.0',
    '34.4.3',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type RucioclientPackage = typeof rucioclientPackage
