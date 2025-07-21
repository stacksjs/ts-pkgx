/**
 * **zimg** - Package from pantry: github.com/sekrit-twc/zimg
 *
 * @domain `github.com/sekrit-twc/zimg`
 *
 * @install `launchpad install github.com/sekrit-twc/zimg`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomsekrittwczimg
 * console.log(pkg.name)        // "zimg"
 * console.log(pkg.description) // "Package from pantry: github.com/sekrit-twc/zimg"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/sekrit-twc/zimg.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomsekrittwczimgPackage = {
  /**
   * The display name of this package.
   */
  name: 'zimg' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/sekrit-twc/zimg' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/sekrit-twc/zimg' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/sekrit-twc/zimg' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/sekrit-twc/zimg -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/sekrit-twc/zimg' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/sekrit-twc/zimg/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomsekrittwczimgPackage = typeof githubcomsekrittwczimgPackage
