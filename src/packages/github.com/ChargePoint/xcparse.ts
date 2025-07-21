/**
 * **xcparse** - Package from pantry: github.com/ChargePoint/xcparse
 *
 * @domain `github.com/ChargePoint/xcparse`
 *
 * @install `launchpad install github.com/ChargePoint/xcparse`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomchargepointxcparse
 * console.log(pkg.name)        // "xcparse"
 * console.log(pkg.description) // "Package from pantry: github.com/ChargePoint/xcp..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/ChargePoint/xcparse.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomchargepointxcparsePackage = {
  /**
   * The display name of this package.
   */
  name: 'xcparse' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/ChargePoint/xcparse' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/ChargePoint/xcparse' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/ChargePoint/xcparse' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/ChargePoint/xcparse -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/ChargePoint/xcparse' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/ChargePoint/xcparse/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomchargepointxcparsePackage = typeof githubcomchargepointxcparsePackage
