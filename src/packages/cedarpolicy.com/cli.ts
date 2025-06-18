/**
 * **cedar** - Implementation of the Cedar Policy Language
 *
 * @domain `cedarpolicy.com/cli`
 * @programs `cedar`
 * @version `4.4.1` (34 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install cedar`
 * @aliases `cedar`
 * @dependencies `rust-lang.org>=1.65`, `rust-lang.org/cargo`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.cedar
 * // Or access via domain
 * const samePkg = pantry.cedarpolicycomcli
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "cli"
 * console.log(pkg.description) // "Implementation of the Cedar Policy Language"
 * console.log(pkg.programs)    // ["cedar"]
 * console.log(pkg.versions[0]) // "4.4.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/cedarpolicy-com/cli.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cedarPackage = {
  /**
   * The display name of this package.
   */
  name: 'cli' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'cedarpolicy.com/cli' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Implementation of the Cedar Policy Language' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/cedarpolicy.com/cli/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install cedar' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'cedar',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'rust-lang.org>=1.65',
    'rust-lang.org/cargo',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '4.4.1',
    '4.4.0',
    '4.3.3',
    '4.3.2',
    '4.3.1',
    '4.3.0',
    '4.2.2',
    '4.2.1',
    '4.2.0',
    '4.1.0',
    '4.0.0',
    '3.4.1',
    '3.4.0',
    '3.3.0',
    '3.2.4',
    '3.2.1',
    '3.2.0',
    '3.1.4',
    '3.1.3',
    '3.1.2',
    '3.1.1',
    '3.1.0',
    '3.0.1',
    '3.0.0',
    '2.5.0',
    '2.4.7',
    '2.4.6',
    '2.4.5',
    '2.4.4',
    '2.4.3',
    '2.4.2',
    '2.4.1',
    '2.4.0',
    '2.3.3',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'cedar',
  ] as const,
}

export type CedarPackage = typeof cedarPackage
