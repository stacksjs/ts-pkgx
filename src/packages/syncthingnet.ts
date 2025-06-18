/**
 * **syncthing.net** - Package from pantry: syncthing.net
 *
 * @domain `syncthing.net`
 *
 * @install `launchpad install syncthing.net`
 * @dependencies `go.dev^1.21`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.syncthingnet
 * console.log(pkg.name)        // "syncthing.net"
 * console.log(pkg.description) // "Package from pantry: syncthing.net"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/syncthing-net.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const syncthingnetPackage = {
  /**
   * The display name of this package.
   */
  name: 'syncthing.net' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'syncthing.net' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: syncthing.net' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install syncthing.net' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'go.dev^1.21',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/syncthing.net/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type SyncthingnetPackage = typeof syncthingnetPackage
