/**
 * **srgn** - A grep-like tool which understands source code syntax and allows for manipulation in addition to search
 *
 * @domain `crates.io/srgn`
 * @programs `srgn`
 * @version `0.10.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install srgn`
 * @name `srgn`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.srgn
 * // Or access via domain
 * const samePkg = pantry.cratesiosrgn
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "srgn"
 * console.log(pkg.description) // "A grep-like tool which understands source code ..."
 * console.log(pkg.programs)    // ["srgn"]
 * console.log(pkg.versions[0]) // "0.10.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/srgn.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const srgnPackage = {
  /**
   * The display name of this package.
   */
  name: 'srgn' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/srgn' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A grep-like tool which understands source code syntax and allows for manipulation in addition to search' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/srgn/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install srgn' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'srgn',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.10.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type SrgnPackage = typeof srgnPackage
