/**
 * **elv.sh** - Package from pantry: elv.sh
 *
 * @domain `elv.sh`
 *
 * @install `launchpad install elv.sh`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.elvsh
 * console.log(pkg.name)        // "elv.sh"
 * console.log(pkg.description) // "Package from pantry: elv.sh"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/elv-sh.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const elvshPackage = {
  /**
   * The display name of this package.
   */
  name: 'elv.sh' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'elv.sh' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: elv.sh' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install elv.sh' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +elv.sh -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install elv.sh' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/elv.sh/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type ElvshPackage = typeof elvshPackage
