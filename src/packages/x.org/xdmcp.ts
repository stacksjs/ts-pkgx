/**
 * **xdmcp** - Package from pantry: x.org/xdmcp
 *
 * @domain `x.org/xdmcp`
 *
 * @install `launchpad install x.org/xdmcp`
 * @dependencies `x.org/protocol`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.xorgxdmcp
 * console.log(pkg.name)        // "xdmcp"
 * console.log(pkg.description) // "Package from pantry: x.org/xdmcp"
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
  description: 'Package from pantry: x.org/xdmcp' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install x.org/xdmcp' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'x.org/protocol',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/x.org/xdmcp/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type XorgxdmcpPackage = typeof xorgxdmcpPackage
