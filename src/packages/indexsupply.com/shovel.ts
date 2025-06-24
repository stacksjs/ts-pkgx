/**
 * **shovel** - Package from pantry: indexsupply.com/shovel
 *
 * @domain `indexsupply.com/shovel`
 *
 * @install `launchpad install indexsupply.com/shovel`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.indexsupplycomshovel
 * console.log(pkg.name)        // "shovel"
 * console.log(pkg.description) // "Package from pantry: indexsupply.com/shovel"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/indexsupply-com/shovel.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const indexsupplycomshovelPackage = {
  /**
   * The display name of this package.
   */
  name: 'shovel' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'indexsupply.com/shovel' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: indexsupply.com/shovel' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install indexsupply.com/shovel' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +indexsupply.com/shovel -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install indexsupply.com/shovel' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/indexsupply.com/shovel/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type IndexsupplycomshovelPackage = typeof indexsupplycomshovelPackage
