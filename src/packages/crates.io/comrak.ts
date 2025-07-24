/**
 * **comrak** - Package from pantry: crates.io/comrak
 *
 * @domain `crates.io/comrak`
 *
 * @install `launchpad install crates.io/comrak`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesiocomrak
 * console.log(pkg.name)        // "comrak"
 * console.log(pkg.description) // "Package from pantry: crates.io/comrak"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/comrak.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiocomrakPackage = {
  /**
   * The display name of this package.
   */
  name: 'comrak' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/comrak' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: crates.io/comrak' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install crates.io/comrak' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/comrak -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/comrak' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/comrak/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CratesiocomrakPackage = typeof cratesiocomrakPackage
