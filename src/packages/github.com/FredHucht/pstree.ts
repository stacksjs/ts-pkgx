/**
 * **pstree** - Package from pantry: github.com/FredHucht/pstree
 *
 * @domain `github.com/FredHucht/pstree`
 *
 * @install `launchpad install github.com/FredHucht/pstree`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomfredhuchtpstree
 * console.log(pkg.name)        // "pstree"
 * console.log(pkg.description) // "Package from pantry: github.com/FredHucht/pstree"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/FredHucht/pstree.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomfredhuchtpstreePackage = {
  /**
   * The display name of this package.
   */
  name: 'pstree' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/FredHucht/pstree' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/FredHucht/pstree' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/FredHucht/pstree' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/FredHucht/pstree -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/FredHucht/pstree' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/FredHucht/pstree/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomfredhuchtpstreePackage = typeof githubcomfredhuchtpstreePackage
