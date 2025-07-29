/**
 * **depot.dev** - Package from pantry: depot.dev
 *
 * @domain `depot.dev`
 *
 * @install `launchpad install depot.dev`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.depotdev
 * console.log(pkg.name)        // "depot.dev"
 * console.log(pkg.description) // "Package from pantry: depot.dev"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/depot-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const depotdevPackage = {
  /**
   * The display name of this package.
   */
  name: 'depot.dev' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'depot.dev' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: depot.dev' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install depot.dev' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +depot.dev -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install depot.dev' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/depot.dev/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type DepotdevPackage = typeof depotdevPackage
