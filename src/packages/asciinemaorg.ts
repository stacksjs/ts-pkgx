/**
 * **asciinema** - Record and share terminal sessions
 *
 * @domain `asciinema.org`
 * @programs `asciinema`
 * @version `3.0.0` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install asciinema`
 * @name `asciinema`
 * @dependencies `python.org^3.12`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.asciinema
 * // Or access via domain
 * const samePkg = pantry.asciinemaorg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "asciinema"
 * console.log(pkg.description) // "Record and share terminal sessions"
 * console.log(pkg.programs)    // ["asciinema"]
 * console.log(pkg.versions[0]) // "3.0.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/asciinema-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const asciinemaPackage = {
  /**
   * The display name of this package.
   */
  name: 'asciinema' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'asciinema.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Record and share terminal sessions' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/asciinema.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install asciinema' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'asciinema',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org^3.12',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.0.0',
    '2.4.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) asciinema -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install asciinema' as const,
}

export type AsciinemaPackage = typeof asciinemaPackage
