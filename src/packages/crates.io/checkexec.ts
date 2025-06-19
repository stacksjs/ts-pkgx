/**
 * **checkexec** - CLI tool to conditionally execute commands only when files in a dependency list have been updated. Like `make`, but standalone.
 *
 * @domain `crates.io/checkexec`
 * @programs `checkexec`
 * @version `0.2.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install checkexec`
 * @name `checkexec`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.checkexec
 * // Or access via domain
 * const samePkg = pantry.cratesiocheckexec
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "checkexec"
 * console.log(pkg.description) // "CLI tool to conditionally execute commands only..."
 * console.log(pkg.programs)    // ["checkexec"]
 * console.log(pkg.versions[0]) // "0.2.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/checkexec.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const checkexecPackage = {
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
  description: 'CLI tool to conditionally execute commands only when files in a dependency list have been updated. Like `make`, but standalone.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/checkexec/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install checkexec' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'checkexec',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.2.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type CheckexecPackage = typeof checkexecPackage
