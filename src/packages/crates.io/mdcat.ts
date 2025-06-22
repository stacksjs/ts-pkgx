/**
 * **mdcat** - Show markdown documents on text terminals
 *
 * @domain `crates.io/mdcat`
 * @programs `mdcat`
 * @version `2.7.1` (19 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install mdcat`
 * @name `mdcat`
 * @dependencies `openssl.org^1.1`, `curl.se^8 # since 2.7.0`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.mdcat
 * // Or access via domain
 * const samePkg = pantry.cratesiomdcat
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "mdcat"
 * console.log(pkg.description) // "Show markdown documents on text terminals"
 * console.log(pkg.programs)    // ["mdcat"]
 * console.log(pkg.versions[0]) // "2.7.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/mdcat.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mdcatPackage = {
  /**
   * The display name of this package.
   */
  name: 'mdcat' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/mdcat' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Show markdown documents on text terminals' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/mdcat/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install mdcat' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'mdcat',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org^1.1',
    'curl.se^8 # since 2.7.0',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.7.1',
    '2.7.0',
    '2.6.2',
    '2.6.1',
    '2.6.0',
    '2.5.0',
    '2.4.0',
    '2.3.1',
    '2.3.0',
    '2.2.0',
    '2.1.2',
    '2.1.1',
    '2.1.0',
    '2.0.4',
    '2.0.3',
    '2.0.2',
    '2.0.1',
    '2.0.0',
    '1.1.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) mdcat -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install mdcat' as const,
}

export type MdcatPackage = typeof mdcatPackage
