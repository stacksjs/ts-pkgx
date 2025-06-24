/**
 * **consul.io** - Package from pantry: consul.io
 *
 * @domain `consul.io`
 *
 * @install `launchpad install consul.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.consulio
 * console.log(pkg.name)        // "consul.io"
 * console.log(pkg.description) // "Package from pantry: consul.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/consul-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const consulioPackage = {
  /**
   * The display name of this package.
   */
  name: 'consul.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'consul.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: consul.io' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install consul.io' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +consul.io -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install consul.io' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/consul.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type ConsulioPackage = typeof consulioPackage
