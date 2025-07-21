/**
 * **pio** - Package from pantry: github.com/siiptuo/pio
 *
 * @domain `github.com/siiptuo/pio`
 *
 * @install `launchpad install github.com/siiptuo/pio`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomsiiptuopio
 * console.log(pkg.name)        // "pio"
 * console.log(pkg.description) // "Package from pantry: github.com/siiptuo/pio"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/siiptuo/pio.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomsiiptuopioPackage = {
  /**
   * The display name of this package.
   */
  name: 'pio' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/siiptuo/pio' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/siiptuo/pio' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/siiptuo/pio' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/siiptuo/pio -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/siiptuo/pio' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/siiptuo/pio/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomsiiptuopioPackage = typeof githubcomsiiptuopioPackage
