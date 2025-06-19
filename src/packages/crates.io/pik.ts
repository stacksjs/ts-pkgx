/**
 * **pik** - Process Interactive Kill
 *
 * @domain `crates.io/pik`
 * @programs `pik`
 * @version `0.24.0` (11 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install pik`
 * @name `pik`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.pik
 * // Or access via domain
 * const samePkg = pantry.cratesiopik
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "pik"
 * console.log(pkg.description) // "Process Interactive Kill"
 * console.log(pkg.programs)    // ["pik"]
 * console.log(pkg.versions[0]) // "0.24.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/pik.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pikPackage = {
  /**
   * The display name of this package.
   */
  name: 'pik' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/pik' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Process Interactive Kill' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/pik/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install pik' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'pik',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.24.0',
    '0.23.1',
    '0.23.0',
    '0.22.0',
    '0.21.0',
    '0.20.0',
    '0.19.0',
    '0.18.1',
    '0.18.0',
    '0.17.0',
    '0.16.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type PikPackage = typeof pikPackage
