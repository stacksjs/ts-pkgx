/**
 * **xcodes** - Package from pantry: github.com/XcodesOrg/xcodes
 *
 * @domain `github.com/XcodesOrg/xcodes`
 *
 * @install `launchpad install github.com/XcodesOrg/xcodes`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomxcodesorgxcodes
 * console.log(pkg.name)        // "xcodes"
 * console.log(pkg.description) // "Package from pantry: github.com/XcodesOrg/xcodes"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/XcodesOrg/xcodes.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomxcodesorgxcodesPackage = {
  /**
   * The display name of this package.
   */
  name: 'xcodes' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/XcodesOrg/xcodes' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/XcodesOrg/xcodes' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/XcodesOrg/xcodes' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/XcodesOrg/xcodes -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/XcodesOrg/xcodes' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/XcodesOrg/xcodes/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomxcodesorgxcodesPackage = typeof githubcomxcodesorgxcodesPackage
