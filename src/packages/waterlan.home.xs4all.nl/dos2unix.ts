/**
 * **dos2unix** - Convert text between DOS, UNIX, and Mac formats
 *
 * @domain `waterlan.home.xs4all.nl/dos2unix`
 * @programs `dos2unix`, `mac2unix`, `unix2dos`, `unix2mac`
 * @version `7.5.3` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install dos2unix`
 * @name `dos2unix`
 * @dependencies `gnu.org/gettext`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.dos2unix
 * // Or access via domain
 * const samePkg = pantry.waterlanhomexs4allnldos2unix
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "dos2unix"
 * console.log(pkg.description) // "Convert text between DOS, UNIX, and Mac formats"
 * console.log(pkg.programs)    // ["dos2unix", "mac2unix", ...]
 * console.log(pkg.versions[0]) // "7.5.3" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/waterlan-home-xs4all-nl/dos2unix.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const dos2unixPackage = {
  /**
   * The display name of this package.
   */
  name: 'dos2unix' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'waterlan.home.xs4all.nl/dos2unix' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Convert text between DOS, UNIX, and Mac formats' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/waterlan.home.xs4all.nl/dos2unix/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install dos2unix' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'dos2unix',
    'mac2unix',
    'unix2dos',
    'unix2mac',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnu.org/gettext',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '7.5.3',
    '7.5.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +waterlan.home.xs4all.nl/dos2unix -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install dos2unix' as const,
}

export type Dos2unixPackage = typeof dos2unixPackage
