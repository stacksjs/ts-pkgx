/**
 * **pqrs** - Command line tool for inspecting Parquet files
 *
 * @domain `crates.io/pqrs`
 * @programs `pqrs`
 * @version `0.3.2` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install pqrs`
 * @name `pqrs`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.pqrs
 * // Or access via domain
 * const samePkg = pantry.cratesiopqrs
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "pqrs"
 * console.log(pkg.description) // "Command line tool for inspecting Parquet files"
 * console.log(pkg.programs)    // ["pqrs"]
 * console.log(pkg.versions[0]) // "0.3.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/pqrs.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pqrsPackage = {
  /**
   * The display name of this package.
   */
  name: 'pqrs' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/pqrs' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Command line tool for inspecting Parquet files' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/pqrs/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install pqrs' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'pqrs',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.3.2',
    '0.3.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) pqrs -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install pqrs' as const,
}

export type PqrsPackage = typeof pqrsPackage
