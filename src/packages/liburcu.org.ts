/**
 * **liburcu** - liburcu is a LGPLv2.1 userspace RCU (read-copy-update) library. This data synchronization library provides read-side access which scales linearly with the number of cores.
 *
 * @domain `liburcu.org`
 * @version `0.15.3` (4 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/liburcu-org.md
 *
 * @install `sh <(curl https://pkgx.sh) +liburcu.org -- $SHELL -i`
 * @aliases `liburcu`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.liburcu
 * // Or access via domain
 * const samePkg = pantry.liburcuorg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "liburcu"
 * console.log(pkg.description) // "liburcu is a LGPLv2.1 userspace RCU (read-copy-..."
 * console.log(pkg.versions[0]) // "0.15.3" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/liburcu-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const liburcuPackage = {
  /**
   * The display name of this package.
   */
  name: 'liburcu' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'liburcu.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'liburcu is a LGPLv2.1 userspace RCU (read-copy-update) library. This data synchronization library provides read-side access which scales linearly with the number of cores.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/liburcu.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +liburcu.org -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.15.3',
    '0.15.2',
    '0.15.1',
    '0.15.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'liburcu',
  ] as const,
  fullPath: 'liburcu.org' as const,
}

export type LiburcuPackage = typeof liburcuPackage
