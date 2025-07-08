/**
 * **zippy** - Package from pantry: github.com/thinkst/zippy
 *
 * @domain `github.com/thinkst/zippy`
 *
 * @install `launchpad install github.com/thinkst/zippy`
 * @dependencies `python.org~3.10`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomthinkstzippy
 * console.log(pkg.name)        // "zippy"
 * console.log(pkg.description) // "Package from pantry: github.com/thinkst/zippy"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/thinkst/zippy.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomthinkstzippyPackage = {
  /**
   * The display name of this package.
   */
  name: 'zippy' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/thinkst/zippy' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/thinkst/zippy' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/thinkst/zippy' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/thinkst/zippy -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/thinkst/zippy' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org~3.10',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/thinkst/zippy/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomthinkstzippyPackage = typeof githubcomthinkstzippyPackage
