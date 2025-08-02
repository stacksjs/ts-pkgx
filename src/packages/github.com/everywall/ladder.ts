/**
 * **ladder** - Package from pantry: github.com/everywall/ladder
 *
 * @domain `github.com/everywall/ladder`
 *
 * @install `launchpad install github.com/everywall/ladder`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomeverywallladder
 * console.log(pkg.name)        // "ladder"
 * console.log(pkg.description) // "Package from pantry: github.com/everywall/ladder"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/everywall/ladder.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomeverywallladderPackage = {
  /**
   * The display name of this package.
   */
  name: 'ladder' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/everywall/ladder' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/everywall/ladder' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/everywall/ladder' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/everywall/ladder -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/everywall/ladder' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/everywall/ladder/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomeverywallladderPackage = typeof githubcomeverywallladderPackage
