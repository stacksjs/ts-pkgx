/**
 * **cilium** - Package from pantry: cilium.io/cilium
 *
 * @domain `cilium.io/cilium`
 *
 * @install `launchpad install cilium.io/cilium`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.ciliumiocilium
 * console.log(pkg.name)        // "cilium"
 * console.log(pkg.description) // "Package from pantry: cilium.io/cilium"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/cilium-io/cilium.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ciliumiociliumPackage = {
  /**
   * The display name of this package.
   */
  name: 'cilium' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'cilium.io/cilium' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: cilium.io/cilium' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install cilium.io/cilium' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +cilium.io/cilium -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install cilium.io/cilium' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/cilium.io/cilium/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CiliumiociliumPackage = typeof ciliumiociliumPackage
