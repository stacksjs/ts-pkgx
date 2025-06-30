/**
 * **yq** - Package from pantry: github.com/mikefarah/yq
 *
 * @domain `github.com/mikefarah/yq`
 *
 * @install `launchpad install github.com/mikefarah/yq`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcommikefarahyq
 * console.log(pkg.name)        // "yq"
 * console.log(pkg.description) // "Package from pantry: github.com/mikefarah/yq"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/mikefarah/yq.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcommikefarahyqPackage = {
  /**
   * The display name of this package.
   */
  name: 'yq' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/mikefarah/yq' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/mikefarah/yq' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/mikefarah/yq' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/mikefarah/yq -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/mikefarah/yq' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/mikefarah/yq/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcommikefarahyqPackage = typeof githubcommikefarahyqPackage
