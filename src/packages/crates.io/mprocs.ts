/**
 * **mprocs** - Run multiple commands in parallel
 *
 * @domain `crates.io/mprocs`
 * @programs `mprocs`
 * @version `0.7.3` (5 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install mprocs`
 * @name `mprocs`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.mprocs
 * // Or access via domain
 * const samePkg = pantry.cratesiomprocs
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "mprocs"
 * console.log(pkg.description) // "Run multiple commands in parallel"
 * console.log(pkg.programs)    // ["mprocs"]
 * console.log(pkg.versions[0]) // "0.7.3" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/mprocs.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mprocsPackage = {
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
  description: 'Run multiple commands in parallel' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/mprocs/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install mprocs' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'mprocs',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.7.3',
    '0.7.2',
    '0.7.1',
    '0.7.0',
    '0.6.4',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) mprocs -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install mprocs' as const,
}

export type MprocsPackage = typeof mprocsPackage
