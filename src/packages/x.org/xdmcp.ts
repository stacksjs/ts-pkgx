/**
 * **xdmcp** - pkgx package
 *
 * @domain `x.org/xdmcp`
 * @version `1.1.5` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +x.org/xdmcp -- $SHELL -i`
 * @dependencies `x.org/protocol`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.xorgxdmcp
 * console.log(pkg.name)        // "xdmcp"
 * console.log(pkg.versions[0]) // "1.1.5" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/x-org/xdmcp.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xorgxdmcpPackage = {
  /**
   * The display name of this package.
   */
  name: 'xdmcp' as const,
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
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install +x.org/xdmcp -- $SHELL -i' as const,
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
  aliases: [] as const,
}

export type XorgxdmcpPackage = typeof xorgxdmcpPackage
