/**
 * **mprocs** - pkgx package
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
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install crates.io/mprocs' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/mprocs -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/mprocs' as const,
}

export type CratesiomprocsPackage = typeof cratesiomprocsPackage
