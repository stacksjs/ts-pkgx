/**
 * **pike** - Package from pantry: github.com/jameswoolfenden/pike
 *
 * @domain `github.com/jameswoolfenden/pike`
 *
 * @install `launchpad install github.com/jameswoolfenden/pike`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomjameswoolfendenpike
 * console.log(pkg.name)        // "pike"
 * console.log(pkg.description) // "Package from pantry: github.com/jameswoolfenden..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/jameswoolfenden/pike.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomjameswoolfendenpikePackage = {
  /**
   * The display name of this package.
   */
  name: 'pike' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/jameswoolfenden/pike' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/jameswoolfenden/pike' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/jameswoolfenden/pike' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/jameswoolfenden/pike -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/jameswoolfenden/pike' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/jameswoolfenden/pike/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomjameswoolfendenpikePackage = typeof githubcomjameswoolfendenpikePackage
