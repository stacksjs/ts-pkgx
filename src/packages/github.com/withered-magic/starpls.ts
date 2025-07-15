/**
 * **starpls** - Package from pantry: github.com/withered-magic/starpls
 *
 * @domain `github.com/withered-magic/starpls`
 *
 * @install `launchpad install github.com/withered-magic/starpls`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomwitheredmagicstarpls
 * console.log(pkg.name)        // "starpls"
 * console.log(pkg.description) // "Package from pantry: github.com/withered-magic/..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/withered-magic/starpls.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomwitheredmagicstarplsPackage = {
  /**
   * The display name of this package.
   */
  name: 'starpls' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/withered-magic/starpls' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/withered-magic/starpls' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/withered-magic/starpls' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/withered-magic/starpls -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/withered-magic/starpls' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/withered-magic/starpls/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomwitheredmagicstarplsPackage = typeof githubcomwitheredmagicstarplsPackage
