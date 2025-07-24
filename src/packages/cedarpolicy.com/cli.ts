/**
 * **cli** - Package from pantry: cedarpolicy.com/cli
 *
 * @domain `cedarpolicy.com/cli`
 *
 * @install `launchpad install cedarpolicy.com/cli`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cedarpolicycomcli
 * console.log(pkg.name)        // "cli"
 * console.log(pkg.description) // "Package from pantry: cedarpolicy.com/cli"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/cedarpolicy-com/cli.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cedarpolicycomcliPackage = {
  /**
   * The display name of this package.
   */
  name: 'cli' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'cedarpolicy.com/cli' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: cedarpolicy.com/cli' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install cedarpolicy.com/cli' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +cedarpolicy.com/cli -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install cedarpolicy.com/cli' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/cedarpolicy.com/cli/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CedarpolicycomcliPackage = typeof cedarpolicycomcliPackage
