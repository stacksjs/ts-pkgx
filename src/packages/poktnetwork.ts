/**
 * **pokt.network** - Package from pantry: pokt.network
 *
 * @domain `pokt.network`
 *
 * @install `launchpad install pokt.network`
 * @dependencies `go.dev^1.18`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.poktnetwork
 * console.log(pkg.name)        // "pokt.network"
 * console.log(pkg.description) // "Package from pantry: pokt.network"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pokt-network.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const poktnetworkPackage = {
  /**
   * The display name of this package.
   */
  name: 'pokt.network' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'pokt.network' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: pokt.network' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install pokt.network' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'go.dev^1.18',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/pokt.network/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type PoktnetworkPackage = typeof poktnetworkPackage
