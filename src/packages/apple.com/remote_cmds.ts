/**
 * **telnet** - pkgx package
 *
 * @domain `apple.com/remote_cmds`
 * @programs `telnet`
 * @version `306.0.0` (5 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install telnet`
 * @aliases `telnet`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.telnet
 * // Or access via domain
 * const samePkg = pantry.applecomremote_cmds
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "remote_cmds"
 * console.log(pkg.programs)    // ["telnet"]
 * console.log(pkg.versions[0]) // "306.0.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/apple-com/remote_cmds.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const telnetPackage = {
  /**
   * The display name of this package.
   */
  name: 'remote_cmds' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'apple.com/remote_cmds' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/apple.com/remote_cmds/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install telnet' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'telnet',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '306.0.0',
    '303.141.1',
    '303.0.2',
    '302.0.0',
    '294.0.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'telnet',
  ] as const,
}

export type TelnetPackage = typeof telnetPackage
