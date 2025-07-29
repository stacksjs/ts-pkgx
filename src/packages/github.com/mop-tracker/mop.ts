/**
 * **mop** - Package from pantry: github.com/mop-tracker/mop
 *
 * @domain `github.com/mop-tracker/mop`
 *
 * @install `launchpad install github.com/mop-tracker/mop`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcommoptrackermop
 * console.log(pkg.name)        // "mop"
 * console.log(pkg.description) // "Package from pantry: github.com/mop-tracker/mop"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/mop-tracker/mop.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcommoptrackermopPackage = {
  /**
   * The display name of this package.
   */
  name: 'mop' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/mop-tracker/mop' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/mop-tracker/mop' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/mop-tracker/mop' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/mop-tracker/mop -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/mop-tracker/mop' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/mop-tracker/mop/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcommoptrackermopPackage = typeof githubcommoptrackermopPackage
