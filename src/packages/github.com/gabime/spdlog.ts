/**
 * **spdlog** - Package from pantry: github.com/gabime/spdlog
 *
 * @domain `github.com/gabime/spdlog`
 *
 * @install `launchpad install github.com/gabime/spdlog`
 * @dependencies `fmt.dev^11`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomgabimespdlog
 * console.log(pkg.name)        // "spdlog"
 * console.log(pkg.description) // "Package from pantry: github.com/gabime/spdlog"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/gabime/spdlog.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomgabimespdlogPackage = {
  /**
   * The display name of this package.
   */
  name: 'spdlog' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/gabime/spdlog' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/gabime/spdlog' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/gabime/spdlog' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/gabime/spdlog -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/gabime/spdlog' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'fmt.dev^11',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/gabime/spdlog/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomgabimespdlogPackage = typeof githubcomgabimespdlogPackage
