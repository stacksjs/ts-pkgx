/**
 * **minizip** - A massively spiffy yet delicately unobtrusive compression library.
 *
 * @domain `zlib.net/minizip`
 * @version `1.3.1` (3 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +zlib.net/minizip -- $SHELL -i`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.zlibnetminizip
 * console.log(pkg.name)        // "minizip"
 * console.log(pkg.description) // "A massively spiffy yet delicately unobtrusive c..."
 * console.log(pkg.versions[0]) // "1.3.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/zlib-net/minizip.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const zlibnetminizipPackage = {
  /**
   * The display name of this package.
   */
  name: 'minizip' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'zlib.net/minizip' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A massively spiffy yet delicately unobtrusive compression library.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/zlib.net/minizip/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install +zlib.net/minizip -- $SHELL -i' as const,
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
  ] as const,
  aliases: [] as const,
}

export type ZlibnetminizipPackage = typeof zlibnetminizipPackage
