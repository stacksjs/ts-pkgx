/**
 * **xdmcp** - pkgx package
 *
 * @domain `x.org/xdmcp`
 * @version `1.1.5` (2 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/x-org/xdmcp.md
 *
 * @install `sh <(curl https://pkgx.sh) +x.org/xdmcp -- $SHELL -i`
 * @aliases `xdmcp`
 * @dependencies `x.org/protocol`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.xdmcp
 * // Or access via domain
 * const samePkg = pantry.xorgxdmcp
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "x.org/xdmcp"
 * console.log(pkg.versions[0]) // "1.1.5" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/x-org/xdmcp.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xdmcpPackage = {
  /**
   * The display name of this package.
   */
  name: 'x.org/xdmcp' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'x.org/xdmcp' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/x.org/xdmcp/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +x.org/xdmcp -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'x.org/protocol',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.1.5',
    '1.1.4',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'xdmcp',
  ] as const,
  fullPath: 'x.org/xdmcp' as const,
}

export type XdmcpPackage = typeof xdmcpPackage
