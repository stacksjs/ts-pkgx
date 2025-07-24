/**
 * **changie.dev** - Package from pantry: changie.dev
 *
 * @domain `changie.dev`
 *
 * @install `launchpad install changie.dev`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.changiedev
 * console.log(pkg.name)        // "changie.dev"
 * console.log(pkg.description) // "Package from pantry: changie.dev"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/changie-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const changiedevPackage = {
  /**
   * The display name of this package.
   */
  name: 'changie.dev' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'changie.dev' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: changie.dev' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install changie.dev' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +changie.dev -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install changie.dev' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/changie.dev/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type ChangiedevPackage = typeof changiedevPackage
