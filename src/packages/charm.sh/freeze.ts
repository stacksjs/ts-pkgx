/**
 * **freeze** - Package from pantry: charm.sh/freeze
 *
 * @domain `charm.sh/freeze`
 *
 * @install `launchpad install charm.sh/freeze`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.charmshfreeze
 * console.log(pkg.name)        // "freeze"
 * console.log(pkg.description) // "Package from pantry: charm.sh/freeze"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/charm-sh/freeze.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const charmshfreezePackage = {
  /**
   * The display name of this package.
   */
  name: 'freeze' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'charm.sh/freeze' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: charm.sh/freeze' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install charm.sh/freeze' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +charm.sh/freeze -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install charm.sh/freeze' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/charm.sh/freeze/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CharmshfreezePackage = typeof charmshfreezePackage
