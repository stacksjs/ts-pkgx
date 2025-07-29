/**
 * **xh** - Package from pantry: crates.io/xh
 *
 * @domain `crates.io/xh`
 *
 * @install `launchpad install crates.io/xh`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesioxh
 * console.log(pkg.name)        // "xh"
 * console.log(pkg.description) // "Package from pantry: crates.io/xh"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/xh.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesioxhPackage = {
  /**
   * The display name of this package.
   */
  name: 'xh' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/xh' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: crates.io/xh' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install crates.io/xh' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/xh -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/xh' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/xh/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CratesioxhPackage = typeof cratesioxhPackage
