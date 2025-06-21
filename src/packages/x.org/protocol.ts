/**
 * **protocol** - Package from pantry: x.org/protocol
 *
 * @domain `x.org/protocol`
 *
 * @install `launchpad install x.org/protocol`
 * @dependencies `x.org/util-macros`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.xorgprotocol
 * console.log(pkg.name)        // "protocol"
 * console.log(pkg.description) // "Package from pantry: x.org/protocol"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/x-org/protocol.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xorgprotocolPackage = {
  /**
   * The display name of this package.
   */
  name: 'protocol' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'x.org/protocol' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: x.org/protocol' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install x.org/protocol' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'x.org/util-macros',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/x.org/protocol/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type XorgprotocolPackage = typeof xorgprotocolPackage
