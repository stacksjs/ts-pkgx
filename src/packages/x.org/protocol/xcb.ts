/**
 * **protocol/xcb** - pkgx package
 *
 * @domain `x.org/protocol/xcb`
 * @version `1.17.0` (6 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +x.org/protocol/xcb -- $SHELL -i`
 * @aliases `protocol/xcb`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.protocolxcb
 * // Or access via domain
 * const samePkg = pantry.xorgprotocolxcb
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "x.org/protocol/xcb"
 * console.log(pkg.versions[0]) // "1.17.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/x-org/protocol/xcb.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const protocolxcbPackage = {
  /**
   * The display name of this package.
   */
  name: 'x.org/protocol/xcb' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'x.org/protocol/xcb' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/x.org/protocol/xcb/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +x.org/protocol/xcb -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.17.0',
    '1.16.0',
    '1.15.2',
    '1.15.1',
    '1.15.0',
    '1.14.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'protocol/xcb',
  ] as const,
  fullPath: 'x.org/protocol/xcb' as const,
}

export type ProtocolxcbPackage = typeof protocolxcbPackage
