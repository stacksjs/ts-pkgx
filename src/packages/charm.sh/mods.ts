/**
 * **mods** - Package from pantry: charm.sh/mods
 *
 * @domain `charm.sh/mods`
 *
 * @install `launchpad install charm.sh/mods`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.charmshmods
 * console.log(pkg.name)        // "mods"
 * console.log(pkg.description) // "Package from pantry: charm.sh/mods"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/charm-sh/mods.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const charmshmodsPackage = {
  /**
   * The display name of this package.
   */
  name: 'mods' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'charm.sh/mods' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: charm.sh/mods' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install charm.sh/mods' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +charm.sh/mods -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install charm.sh/mods' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/charm.sh/mods/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CharmshmodsPackage = typeof charmshmodsPackage
