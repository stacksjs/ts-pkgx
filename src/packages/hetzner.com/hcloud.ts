/**
 * **hcloud** - Package from pantry: hetzner.com/hcloud
 *
 * @domain `hetzner.com/hcloud`
 *
 * @install `launchpad install hetzner.com/hcloud`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.hetznercomhcloud
 * console.log(pkg.name)        // "hcloud"
 * console.log(pkg.description) // "Package from pantry: hetzner.com/hcloud"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/hetzner-com/hcloud.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const hetznercomhcloudPackage = {
  /**
   * The display name of this package.
   */
  name: 'hcloud' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'hetzner.com/hcloud' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: hetzner.com/hcloud' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install hetzner.com/hcloud' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +hetzner.com/hcloud -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install hetzner.com/hcloud' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/hetzner.com/hcloud/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type HetznercomhcloudPackage = typeof hetznercomhcloudPackage
