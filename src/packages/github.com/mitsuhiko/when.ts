/**
 * **when** - Package from pantry: github.com/mitsuhiko/when
 *
 * @domain `github.com/mitsuhiko/when`
 *
 * @install `launchpad install github.com/mitsuhiko/when`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcommitsuhikowhen
 * console.log(pkg.name)        // "when"
 * console.log(pkg.description) // "Package from pantry: github.com/mitsuhiko/when"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/mitsuhiko/when.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcommitsuhikowhenPackage = {
  /**
   * The display name of this package.
   */
  name: 'when' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/mitsuhiko/when' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/mitsuhiko/when' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/mitsuhiko/when' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/mitsuhiko/when -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/mitsuhiko/when' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/mitsuhiko/when/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcommitsuhikowhenPackage = typeof githubcommitsuhikowhenPackage
