/**
 * **swift-outdated** - Package from pantry: github.com/kiliankoe/swift-outdated
 *
 * @domain `github.com/kiliankoe/swift-outdated`
 *
 * @install `launchpad install github.com/kiliankoe/swift-outdated`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomkiliankoeswiftoutdated
 * console.log(pkg.name)        // "swift-outdated"
 * console.log(pkg.description) // "Package from pantry: github.com/kiliankoe/swift..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/kiliankoe/swift-outdated.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomkiliankoeswiftoutdatedPackage = {
  /**
   * The display name of this package.
   */
  name: 'swift-outdated' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/kiliankoe/swift-outdated' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/kiliankoe/swift-outdated' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/kiliankoe/swift-outdated' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/kiliankoe/swift-outdated -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/kiliankoe/swift-outdated' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/kiliankoe/swift-outdated/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomkiliankoeswiftoutdatedPackage = typeof githubcomkiliankoeswiftoutdatedPackage
