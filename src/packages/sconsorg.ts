/**
 * **scons** - Substitute for classic 'make' tool with autoconf/automake functionality
 *
 * @domain `scons.org`
 * @programs `scons`
 * @version `4.9.1` (7 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install scons`
 * @name `scons`
 * @dependencies `python.org~3.11`, `linux:gnu.org/gcc>=10` (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.scons
 * // Or access via domain
 * const samePkg = pantry.sconsorg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "scons"
 * console.log(pkg.description) // "Substitute for classic 'make' tool with autocon..."
 * console.log(pkg.programs)    // ["scons"]
 * console.log(pkg.versions[0]) // "4.9.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/scons-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const sconsPackage = {
  /**
   * The display name of this package.
   */
  name: 'scons' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'scons.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Substitute for classic \'make\' tool with autoconf/automake functionality' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/scons.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install scons' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'scons',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'python.org~3.11',
    'linux:gnu.org/gcc>=10',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '4.9.1',
    '4.9.0',
    '4.8.1',
    '4.8.0',
    '4.7.0',
    '4.6.0',
    '4.5.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) scons -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install scons' as const,
}

export type SconsPackage = typeof sconsPackage
