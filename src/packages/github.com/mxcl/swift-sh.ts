/**
 * **swift-sh** - Package from pantry: github.com/mxcl/swift-sh
 *
 * @domain `github.com/mxcl/swift-sh`
 *
 * @install `launchpad install github.com/mxcl/swift-sh`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcommxclswiftsh
 * console.log(pkg.name)        // "swift-sh"
 * console.log(pkg.description) // "Package from pantry: github.com/mxcl/swift-sh"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/mxcl/swift-sh.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcommxclswiftshPackage = {
  /**
   * The display name of this package.
   */
  name: 'swift-sh' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/mxcl/swift-sh' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/mxcl/swift-sh' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/mxcl/swift-sh' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/mxcl/swift-sh -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/mxcl/swift-sh' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/mxcl/swift-sh/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcommxclswiftshPackage = typeof githubcommxclswiftshPackage
