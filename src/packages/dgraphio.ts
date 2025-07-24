/**
 * **dgraph.io** - Package from pantry: dgraph.io
 *
 * @domain `dgraph.io`
 *
 * @install `launchpad install dgraph.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.dgraphio
 * console.log(pkg.name)        // "dgraph.io"
 * console.log(pkg.description) // "Package from pantry: dgraph.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/dgraph-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const dgraphioPackage = {
  /**
   * The display name of this package.
   */
  name: 'dgraph.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'dgraph.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: dgraph.io' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install dgraph.io' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +dgraph.io -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install dgraph.io' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/dgraph.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type DgraphioPackage = typeof dgraphioPackage
