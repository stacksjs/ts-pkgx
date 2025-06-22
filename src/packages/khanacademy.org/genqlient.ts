/**
 * **genqlient** - a truly type-safe Go GraphQL client
 *
 * @domain `khanacademy.org/genqlient`
 * @programs `genqlient`
 * @version `0.8.1` (4 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install genqlient`
 * @name `genqlient`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.genqlient
 * // Or access via domain
 * const samePkg = pantry.khanacademyorggenqlient
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "genqlient"
 * console.log(pkg.description) // "a truly type-safe Go GraphQL client"
 * console.log(pkg.programs)    // ["genqlient"]
 * console.log(pkg.versions[0]) // "0.8.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/khanacademy-org/genqlient.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const genqlientPackage = {
  /**
   * The display name of this package.
   */
  name: 'genqlient' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'khanacademy.org/genqlient' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'a truly type-safe Go GraphQL client' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/khanacademy.org/genqlient/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install genqlient' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'genqlient',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.8.1',
    '0.8.0',
    '0.7.0',
    '0.6.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) genqlient -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install genqlient' as const,
}

export type GenqlientPackage = typeof genqlientPackage
