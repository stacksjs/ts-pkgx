/**
 * **pushenv** - Package from pantry: crates.io/pushenv
 *
 * @domain `crates.io/pushenv`
 *
 * @install `launchpad install crates.io/pushenv`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesiopushenv
 * console.log(pkg.name)        // "pushenv"
 * console.log(pkg.description) // "Package from pantry: crates.io/pushenv"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/pushenv.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiopushenvPackage = {
  /**
   * The display name of this package.
   */
  name: 'pushenv' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/pushenv' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: crates.io/pushenv' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install crates.io/pushenv' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/pushenv -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/pushenv' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/pushenv/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CratesiopushenvPackage = typeof cratesiopushenvPackage
