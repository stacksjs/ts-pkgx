/**
 * **pop** - Package from pantry: charm.sh/pop
 *
 * @domain `charm.sh/pop`
 *
 * @install `launchpad install charm.sh/pop`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.charmshpop
 * console.log(pkg.name)        // "pop"
 * console.log(pkg.description) // "Package from pantry: charm.sh/pop"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/charm-sh/pop.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const charmshpopPackage = {
  /**
   * The display name of this package.
   */
  name: 'pop' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'charm.sh/pop' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: charm.sh/pop' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install charm.sh/pop' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +charm.sh/pop -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install charm.sh/pop' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/charm.sh/pop/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CharmshpopPackage = typeof charmshpopPackage
