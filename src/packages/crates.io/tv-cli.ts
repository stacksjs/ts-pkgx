/**
 * **tv** - Format json into table view
 *
 * @domain `crates.io/tv-cli`
 * @programs `tv`
 * @version `0.7.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install tv`
 * @name `tv`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.tv
 * // Or access via domain
 * const samePkg = pantry.cratesiotvcli
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "tv"
 * console.log(pkg.description) // "Format json into table view"
 * console.log(pkg.programs)    // ["tv"]
 * console.log(pkg.versions[0]) // "0.7.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/tv-cli.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const tvPackage = {
  /**
   * The display name of this package.
   */
  name: 'tv' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/tv-cli' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Format json into table view' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/tv-cli/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install tv' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'tv',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.7.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) tv -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install tv' as const,
}

export type TvPackage = typeof tvPackage
