/**
 * **swiftenv** - Package from pantry: github.com/kylef/swiftenv
 *
 * @domain `github.com/kylef/swiftenv`
 *
 * @install `launchpad install github.com/kylef/swiftenv`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomkylefswiftenv
 * console.log(pkg.name)        // "swiftenv"
 * console.log(pkg.description) // "Package from pantry: github.com/kylef/swiftenv"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/kylef/swiftenv.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomkylefswiftenvPackage = {
  /**
   * The display name of this package.
   */
  name: 'swiftenv' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/kylef/swiftenv' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/kylef/swiftenv' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/kylef/swiftenv' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/kylef/swiftenv -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/kylef/swiftenv' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/kylef/swiftenv/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomkylefswiftenvPackage = typeof githubcomkylefswiftenvPackage
