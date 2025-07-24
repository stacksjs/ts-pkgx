/**
 * **checkexec** - Package from pantry: crates.io/checkexec
 *
 * @domain `crates.io/checkexec`
 *
 * @install `launchpad install crates.io/checkexec`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesiocheckexec
 * console.log(pkg.name)        // "checkexec"
 * console.log(pkg.description) // "Package from pantry: crates.io/checkexec"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/checkexec.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiocheckexecPackage = {
  /**
   * The display name of this package.
   */
  name: 'checkexec' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/checkexec' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: crates.io/checkexec' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install crates.io/checkexec' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/checkexec -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/checkexec' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/checkexec/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CratesiocheckexecPackage = typeof cratesiocheckexecPackage
