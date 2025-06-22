/**
 * **scaleway.com** - Package from pantry: scaleway.com
 *
 * @domain `scaleway.com`
 *
 * @install `launchpad install scaleway.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.scalewaycom
 * console.log(pkg.name)        // "scaleway.com"
 * console.log(pkg.description) // "Package from pantry: scaleway.com"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/scaleway-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const scalewaycomPackage = {
  /**
   * The display name of this package.
   */
  name: 'scaleway.com' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'scaleway.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: scaleway.com' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install scaleway.com' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +scaleway.com -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install scaleway.com' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/scaleway.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type ScalewaycomPackage = typeof scalewaycomPackage
