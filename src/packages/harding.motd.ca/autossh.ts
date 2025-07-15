/**
 * **autossh** - Package from pantry: harding.motd.ca/autossh
 *
 * @domain `harding.motd.ca/autossh`
 *
 * @install `launchpad install harding.motd.ca/autossh`
 * @dependencies `openssh.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.hardingmotdcaautossh
 * console.log(pkg.name)        // "autossh"
 * console.log(pkg.description) // "Package from pantry: harding.motd.ca/autossh"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/harding-motd-ca/autossh.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const hardingmotdcaautosshPackage = {
  /**
   * The display name of this package.
   */
  name: 'autossh' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'harding.motd.ca/autossh' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: harding.motd.ca/autossh' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install harding.motd.ca/autossh' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +harding.motd.ca/autossh -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install harding.motd.ca/autossh' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssh.com',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/harding.motd.ca/autossh/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type HardingmotdcaautosshPackage = typeof hardingmotdcaautosshPackage
