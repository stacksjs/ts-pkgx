/**
 * **tine** - TINE a data pipeline runner.
 *
 * @domain `github.com/OutOfBedlam/tine`
 * @programs `tine`
 * @version `0.0.7` (6 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install tine`
 * @name `tine`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.tine
 * // Or access via domain
 * const samePkg = pantry.githubcomoutofbedlamtine
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "tine"
 * console.log(pkg.description) // "TINE a data pipeline runner."
 * console.log(pkg.programs)    // ["tine"]
 * console.log(pkg.versions[0]) // "0.0.7" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/OutOfBedlam/tine.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const tinePackage = {
  /**
   * The display name of this package.
   */
  name: 'tine' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/OutOfBedlam/tine' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'TINE a data pipeline runner.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/OutOfBedlam/tine/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install tine' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'tine',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.0.7',
    '0.0.6',
    '0.0.5',
    '0.0.4',
    '0.0.3',
    '0.0.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type TinePackage = typeof tinePackage
