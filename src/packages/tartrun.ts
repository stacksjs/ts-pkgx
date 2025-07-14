/**
 * **tart.run** - Package from pantry: tart.run
 *
 * @domain `tart.run`
 *
 * @install `launchpad install tart.run`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.tartrun
 * console.log(pkg.name)        // "tart.run"
 * console.log(pkg.description) // "Package from pantry: tart.run"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/tart-run.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const tartrunPackage = {
  /**
   * The display name of this package.
   */
  name: 'tart.run' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'tart.run' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: tart.run' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install tart.run' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +tart.run -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install tart.run' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/tart.run/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type TartrunPackage = typeof tartrunPackage
