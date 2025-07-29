/**
 * **zlib.net** - A massively spiffy yet delicately unobtrusive compression library.
 *
 * @domain `zlib.net`
 * @version `1.3.1` (4 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install zlib.net`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.zlibnet
 * console.log(pkg.name)        // "zlib.net"
 * console.log(pkg.description) // "A massively spiffy yet delicately unobtrusive c..."
 * console.log(pkg.versions[0]) // "1.3.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/zlib-net.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const zlibnetPackage = {
  /**
   * The display name of this package.
   */
  name: 'zlib.net' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'zlib.net' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A massively spiffy yet delicately unobtrusive compression library.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/zlib.net/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install zlib.net' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.3.1',
    '1.3.0',
    '1.2.13',
    '1.2.12',
  ] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +zlib.net -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install zlib.net' as const,
}

export type ZlibnetPackage = typeof zlibnetPackage
