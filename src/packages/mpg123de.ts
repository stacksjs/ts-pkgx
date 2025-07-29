/**
 * **mpg123** - MP3 player for Linux and UNIX
 *
 * @domain `mpg123.de`
 * @programs `mpg123`
 * @version `1.33.1` (16 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install mpg123`
 * @name `mpg123`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.mpg123
 * // Or access via domain
 * const samePkg = pantry.mpg123de
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "mpg123"
 * console.log(pkg.description) // "MP3 player for Linux and UNIX"
 * console.log(pkg.programs)    // ["mpg123"]
 * console.log(pkg.versions[0]) // "1.33.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/mpg123-de.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mpg123Package = {
  /**
   * The display name of this package.
   */
  name: 'mpg123' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'mpg123.de' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'MP3 player for Linux and UNIX' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/mpg123.de/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install mpg123' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'mpg123',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.33.1',
    '1.33.0',
    '1.32.11',
    '1.32.10',
    '1.32.9',
    '1.32.8',
    '1.32.7',
    '1.32.6',
    '1.32.5',
    '1.32.4',
    '1.32.3',
    '1.32.2',
    '1.32.1',
    '1.32.0',
    '1.31.4',
    '1.31.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) mpg123 -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install mpg123' as const,
}

export type Mpg123Package = typeof mpg123Package
