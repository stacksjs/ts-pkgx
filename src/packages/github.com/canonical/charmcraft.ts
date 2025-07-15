/**
 * **charmcraft** - Package from pantry: github.com/canonical/charmcraft
 *
 * @domain `github.com/canonical/charmcraft`
 *
 * @install `launchpad install github.com/canonical/charmcraft`
 * @dependencies `pkgx.sh^1`, `libgit2.org~1.7`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomcanonicalcharmcraft
 * console.log(pkg.name)        // "charmcraft"
 * console.log(pkg.description) // "Package from pantry: github.com/canonical/charm..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/canonical/charmcraft.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomcanonicalcharmcraftPackage = {
  /**
   * The display name of this package.
   */
  name: 'charmcraft' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/canonical/charmcraft' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/canonical/charmcraft' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/canonical/charmcraft' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/canonical/charmcraft -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/canonical/charmcraft' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pkgx.sh^1',
    'libgit2.org~1.7',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/canonical/charmcraft/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomcanonicalcharmcraftPackage = typeof githubcomcanonicalcharmcraftPackage
