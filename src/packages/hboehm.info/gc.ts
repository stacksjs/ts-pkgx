/**
 * **gc** - Package from pantry: hboehm.info/gc
 *
 * @domain `hboehm.info/gc`
 *
 * @install `launchpad install hboehm.info/gc`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.hboehminfogc
 * console.log(pkg.name)        // "gc"
 * console.log(pkg.description) // "Package from pantry: hboehm.info/gc"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/hboehm-info/gc.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const hboehminfogcPackage = {
  /**
   * The display name of this package.
   */
  name: 'gc' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'hboehm.info/gc' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: hboehm.info/gc' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install hboehm.info/gc' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +hboehm.info/gc -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install hboehm.info/gc' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/hboehm.info/gc/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type HboehminfogcPackage = typeof hboehminfogcPackage
