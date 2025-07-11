/**
 * **net-tools** - Linux networking base tools
 *
 * @domain `sourceforge.net/net-tools`
 * @programs `hostname`, `ifconfig`, `netstat`, `route`
 * @version `2.10.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install net-tools`
 * @name `net-tools`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.nettools
 * // Or access via domain
 * const samePkg = pantry.sourceforgenetnettools
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "net-tools"
 * console.log(pkg.description) // "Linux networking base tools"
 * console.log(pkg.programs)    // ["hostname", "ifconfig", ...]
 * console.log(pkg.versions[0]) // "2.10.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/sourceforge-net/net-tools.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const nettoolsPackage = {
  /**
   * The display name of this package.
   */
  name: 'net-tools' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'sourceforge.net/net-tools' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Linux networking base tools' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/sourceforge.net/net-tools/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install net-tools' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'hostname',
    'ifconfig',
    'netstat',
    'route',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.10.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +sourceforge.net/net-tools -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install net-tools' as const,
}

export type NettoolsPackage = typeof nettoolsPackage
