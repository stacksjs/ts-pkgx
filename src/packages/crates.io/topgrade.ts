/**
 * **topgrade** - Upgrade all the things
 *
 * @domain `crates.io/topgrade`
 * @programs `topgrade`
 * @version `16.0.4` (7 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install topgrade`
 * @name `topgrade`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.topgrade
 * // Or access via domain
 * const samePkg = pantry.cratesiotopgrade
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "topgrade"
 * console.log(pkg.description) // "Upgrade all the things"
 * console.log(pkg.programs)    // ["topgrade"]
 * console.log(pkg.versions[0]) // "16.0.4" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/topgrade.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const topgradePackage = {
  /**
   * The display name of this package.
   */
  name: 'topgrade' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/topgrade' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Upgrade all the things' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/topgrade/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install topgrade' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'topgrade',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '16.0.4',
    '16.0.3',
    '16.0.2',
    '16.0.1',
    '16.0.0',
    '15.0.0',
    '14.0.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type TopgradePackage = typeof topgradePackage
