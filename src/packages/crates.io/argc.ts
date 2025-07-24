/**
 * **argc** - A Bash CLI framework, also a Bash command runner.
 *
 * @domain `crates.io/argc`
 * @programs `argc`
 * @version `1.23.0` (11 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install argc`
 * @name `argc`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.argc
 * // Or access via domain
 * const samePkg = pantry.cratesioargc
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "argc"
 * console.log(pkg.description) // "A Bash CLI framework, also a Bash command runner."
 * console.log(pkg.programs)    // ["argc"]
 * console.log(pkg.versions[0]) // "1.23.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/argc.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const argcPackage = {
  /**
   * The display name of this package.
   */
  name: 'argc' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/argc' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A Bash CLI framework, also a Bash command runner.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/argc/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install argc' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'argc',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.23.0',
    '1.22.0',
    '1.21.1',
    '1.21.0',
    '1.20.1',
    '1.20.0',
    '1.19.0',
    '1.18.0',
    '1.17.0',
    '1.16.0',
    '1.15.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) argc -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install argc' as const,
}

export type ArgcPackage = typeof argcPackage
