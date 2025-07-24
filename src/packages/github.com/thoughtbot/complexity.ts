/**
 * **complexity** - Package from pantry: github.com/thoughtbot/complexity
 *
 * @domain `github.com/thoughtbot/complexity`
 *
 * @install `launchpad install github.com/thoughtbot/complexity`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomthoughtbotcomplexity
 * console.log(pkg.name)        // "complexity"
 * console.log(pkg.description) // "Package from pantry: github.com/thoughtbot/comp..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/thoughtbot/complexity.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomthoughtbotcomplexityPackage = {
  /**
   * The display name of this package.
   */
  name: 'complexity' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/thoughtbot/complexity' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/thoughtbot/complexity' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/thoughtbot/complexity' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/thoughtbot/complexity -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/thoughtbot/complexity' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/thoughtbot/complexity/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomthoughtbotcomplexityPackage = typeof githubcomthoughtbotcomplexityPackage
