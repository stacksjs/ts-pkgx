/**
 * **gotestsum** - Package from pantry: github.com/gotestyourself/gotestsum
 *
 * @domain `github.com/gotestyourself/gotestsum`
 *
 * @install `launchpad install github.com/gotestyourself/gotestsum`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomgotestyourselfgotestsum
 * console.log(pkg.name)        // "gotestsum"
 * console.log(pkg.description) // "Package from pantry: github.com/gotestyourself/..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/gotestyourself/gotestsum.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomgotestyourselfgotestsumPackage = {
  /**
   * The display name of this package.
   */
  name: 'gotestsum' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/gotestyourself/gotestsum' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/gotestyourself/gotestsum' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/gotestyourself/gotestsum' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/gotestyourself/gotestsum -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/gotestyourself/gotestsum' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/gotestyourself/gotestsum/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomgotestyourselfgotestsumPackage = typeof githubcomgotestyourselfgotestsumPackage
