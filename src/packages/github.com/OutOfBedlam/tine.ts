/**
 * **tine** - Package from pantry: github.com/OutOfBedlam/tine
 *
 * @domain `github.com/OutOfBedlam/tine`
 *
 * @install `launchpad install github.com/OutOfBedlam/tine`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomoutofbedlamtine
 * console.log(pkg.name)        // "tine"
 * console.log(pkg.description) // "Package from pantry: github.com/OutOfBedlam/tine"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/OutOfBedlam/tine.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomoutofbedlamtinePackage = {
  /**
   * The display name of this package.
   */
  name: 'tine' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/OutOfBedlam/tine' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/OutOfBedlam/tine' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/OutOfBedlam/tine' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/OutOfBedlam/tine -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/OutOfBedlam/tine' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/OutOfBedlam/tine/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomoutofbedlamtinePackage = typeof githubcomoutofbedlamtinePackage
