/**
 * **reshape** - Package from pantry: fabianlindfors.se/reshape
 *
 * @domain `fabianlindfors.se/reshape`
 *
 * @install `launchpad install fabianlindfors.se/reshape`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.fabianlindforssereshape
 * console.log(pkg.name)        // "reshape"
 * console.log(pkg.description) // "Package from pantry: fabianlindfors.se/reshape"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/fabianlindfors-se/reshape.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const fabianlindforssereshapePackage = {
  /**
   * The display name of this package.
   */
  name: 'reshape' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'fabianlindfors.se/reshape' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: fabianlindfors.se/reshape' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install fabianlindfors.se/reshape' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +fabianlindfors.se/reshape -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install fabianlindfors.se/reshape' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/fabianlindfors.se/reshape/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type FabianlindforssereshapePackage = typeof fabianlindforssereshapePackage
