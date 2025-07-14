/**
 * **openblas.net** - Package from pantry: openblas.net
 *
 * @domain `openblas.net`
 *
 * @install `launchpad install openblas.net`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.openblasnet
 * console.log(pkg.name)        // "openblas.net"
 * console.log(pkg.description) // "Package from pantry: openblas.net"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/openblas-net.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const openblasnetPackage = {
  /**
   * The display name of this package.
   */
  name: 'openblas.net' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'openblas.net' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: openblas.net' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install openblas.net' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +openblas.net -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install openblas.net' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/openblas.net/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type OpenblasnetPackage = typeof openblasnetPackage
