/**
 * **bats-core** - Package from pantry: github.com/bats-core/bats-core
 *
 * @domain `github.com/bats-core/bats-core`
 *
 * @install `launchpad install github.com/bats-core/bats-core`
 * @dependencies `gnu.org/coreutils^9.4`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcombatscorebatscore
 * console.log(pkg.name)        // "bats-core"
 * console.log(pkg.description) // "Package from pantry: github.com/bats-core/bats-..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/bats-core/bats-core.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcombatscorebatscorePackage = {
  /**
   * The display name of this package.
   */
  name: 'bats-core' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/bats-core/bats-core' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/bats-core/bats-core' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/bats-core/bats-core' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/bats-core/bats-core -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/bats-core/bats-core' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnu.org/coreutils^9.4',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/bats-core/bats-core/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcombatscorebatscorePackage = typeof githubcombatscorebatscorePackage
