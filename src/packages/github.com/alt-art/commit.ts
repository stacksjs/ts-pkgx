/**
 * **commit** - Package from pantry: github.com/alt-art/commit
 *
 * @domain `github.com/alt-art/commit`
 *
 * @install `launchpad install github.com/alt-art/commit`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomaltartcommit
 * console.log(pkg.name)        // "commit"
 * console.log(pkg.description) // "Package from pantry: github.com/alt-art/commit"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/alt-art/commit.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomaltartcommitPackage = {
  /**
   * The display name of this package.
   */
  name: 'commit' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/alt-art/commit' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/alt-art/commit' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/alt-art/commit' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/alt-art/commit -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/alt-art/commit' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/alt-art/commit/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomaltartcommitPackage = typeof githubcomaltartcommitPackage
