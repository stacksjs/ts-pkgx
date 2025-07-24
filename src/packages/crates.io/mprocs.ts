/**
 * **mprocs** - Package from pantry: crates.io/mprocs
 *
 * @domain `crates.io/mprocs`
 *
 * @install `launchpad install crates.io/mprocs`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesiomprocs
 * console.log(pkg.name)        // "mprocs"
 * console.log(pkg.description) // "Package from pantry: crates.io/mprocs"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/mprocs.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiomprocsPackage = {
  /**
   * The display name of this package.
   */
  name: 'mprocs' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/mprocs' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: crates.io/mprocs' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install crates.io/mprocs' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/mprocs -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/mprocs' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/mprocs/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CratesiomprocsPackage = typeof cratesiomprocsPackage
