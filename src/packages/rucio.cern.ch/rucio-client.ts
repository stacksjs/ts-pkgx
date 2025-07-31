/**
 * **rucio-client** - Package from pantry: rucio.cern.ch/rucio-client
 *
 * @domain `rucio.cern.ch/rucio-client`
 *
 * @install `launchpad install rucio.cern.ch/rucio-client`
 * @dependencies `pkgx.sh^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.ruciocernchrucioclient
 * console.log(pkg.name)        // "rucio-client"
 * console.log(pkg.description) // "Package from pantry: rucio.cern.ch/rucio-client"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/rucio-cern-ch/rucio-client.md
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
  domain: 'rucio.cern.ch/rucio-client' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: rucio.cern.ch/rucio-client' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install rucio.cern.ch/rucio-client' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +rucio.cern.ch/rucio-client -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install rucio.cern.ch/rucio-client' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pkgx.sh^1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/rucio.cern.ch/rucio-client/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type RuciocernchrucioclientPackage = typeof ruciocernchrucioclientPackage
