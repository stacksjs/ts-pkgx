/**
 * **blueutil** - Package from pantry: github.com/toy/blueutil
 *
 * @domain `github.com/toy/blueutil`
 *
 * @install `launchpad install github.com/toy/blueutil`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomtoyblueutil
 * console.log(pkg.name)        // "blueutil"
 * console.log(pkg.description) // "Package from pantry: github.com/toy/blueutil"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/toy/blueutil.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomtoyblueutilPackage = {
  /**
   * The display name of this package.
   */
  name: 'blueutil' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/toy/blueutil' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/toy/blueutil' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/toy/blueutil' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/toy/blueutil -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/toy/blueutil' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/toy/blueutil/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomtoyblueutilPackage = typeof githubcomtoyblueutilPackage
