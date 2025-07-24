/**
 * **hubble** - Package from pantry: cilium.io/hubble
 *
 * @domain `cilium.io/hubble`
 *
 * @install `launchpad install cilium.io/hubble`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.ciliumiohubble
 * console.log(pkg.name)        // "hubble"
 * console.log(pkg.description) // "Package from pantry: cilium.io/hubble"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/cilium-io/hubble.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ciliumiohubblePackage = {
  /**
   * The display name of this package.
   */
  name: 'hubble' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'cilium.io/hubble' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: cilium.io/hubble' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install cilium.io/hubble' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +cilium.io/hubble -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install cilium.io/hubble' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/cilium.io/hubble/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CiliumiohubblePackage = typeof ciliumiohubblePackage
