/**
 * **SwiftGen** - pkgx package
 *
 * @domain `github.com/SwiftGen/SwiftGen`
 *
 * @install `launchpad install github.com/SwiftGen/SwiftGen`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomswiftgenswiftgen
 * console.log(pkg.name)        // "SwiftGen"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/SwiftGen/SwiftGen.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomswiftgenswiftgenPackage = {
  /**
   * The display name of this package.
   */
  name: 'SwiftGen' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/SwiftGen/SwiftGen' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/SwiftGen/SwiftGen' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/SwiftGen/SwiftGen -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/SwiftGen/SwiftGen' as const,
}

export type GithubcomswiftgenswiftgenPackage = typeof githubcomswiftgenswiftgenPackage
