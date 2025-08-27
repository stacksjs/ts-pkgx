/**
 * **rucola** - Terminal-based markdown note manager.
 *
 * @domain `crates.io/rucola-notes`
 * @programs `rucola`
 * @version `0.6.0` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install rucola`
 * @name `rucola`
 * @dependencies `openssl.org^1.1 # as of 0.6.0`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.rucola
 * // Or access via domain
 * const samePkg = pantry.cratesiorucolanotes
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "rucola"
 * console.log(pkg.description) // "Terminal-based markdown note manager."
 * console.log(pkg.programs)    // ["rucola"]
 * console.log(pkg.versions[0]) // "0.6.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/rucola-notes.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const rucolaPackage = {
  /**
   * The display name of this package.
   */
  name: 'rucola' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/rucola-notes' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Terminal-based markdown note manager.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/rucola-notes/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install rucola' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'rucola',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org^1.1 # as of 0.6.0',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.6.0',
    '0.5.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) rucola -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install rucola' as const,
}

export type RucolaPackage = typeof rucolaPackage
