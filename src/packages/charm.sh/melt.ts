/**
 * **melt** - Package from pantry: charm.sh/melt
 *
 * @domain `charm.sh/melt`
 *
 * @install `launchpad install charm.sh/melt`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.charmshmelt
 * console.log(pkg.name)        // "melt"
 * console.log(pkg.description) // "Package from pantry: charm.sh/melt"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/charm-sh/melt.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const charmshmeltPackage = {
  /**
   * The display name of this package.
   */
  name: 'melt' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'charm.sh/melt' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: charm.sh/melt' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install charm.sh/melt' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +charm.sh/melt -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install charm.sh/melt' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/charm.sh/melt/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CharmshmeltPackage = typeof charmshmeltPackage
