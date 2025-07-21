/**
 * **s5cmd** - Package from pantry: github.com/peak/s5cmd
 *
 * @domain `github.com/peak/s5cmd`
 *
 * @install `launchpad install github.com/peak/s5cmd`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcompeaks5cmd
 * console.log(pkg.name)        // "s5cmd"
 * console.log(pkg.description) // "Package from pantry: github.com/peak/s5cmd"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/peak/s5cmd.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcompeaks5cmdPackage = {
  /**
   * The display name of this package.
   */
  name: 's5cmd' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/peak/s5cmd' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/peak/s5cmd' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/peak/s5cmd' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/peak/s5cmd -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/peak/s5cmd' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/peak/s5cmd/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Githubcompeaks5cmdPackage = typeof githubcompeaks5cmdPackage
