/**
 * **genqlient** - Package from pantry: khanacademy.org/genqlient
 *
 * @domain `khanacademy.org/genqlient`
 *
 * @install `launchpad install khanacademy.org/genqlient`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.khanacademyorggenqlient
 * console.log(pkg.name)        // "genqlient"
 * console.log(pkg.description) // "Package from pantry: khanacademy.org/genqlient"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/khanacademy-org/genqlient.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const khanacademyorggenqlientPackage = {
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
  description: 'Package from pantry: khanacademy.org/genqlient' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install khanacademy.org/genqlient' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +khanacademy.org/genqlient -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install khanacademy.org/genqlient' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/khanacademy.org/genqlient/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type KhanacademyorggenqlientPackage = typeof khanacademyorggenqlientPackage
