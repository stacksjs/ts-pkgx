/**
 * **apko** - Package from pantry: github.com/chainguard-dev/apko
 *
 * @domain `github.com/chainguard-dev/apko`
 *
 * @install `launchpad install github.com/chainguard-dev/apko`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomchainguarddevapko
 * console.log(pkg.name)        // "apko"
 * console.log(pkg.description) // "Package from pantry: github.com/chainguard-dev/..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/chainguard-dev/apko.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomchainguarddevapkoPackage = {
  /**
   * The display name of this package.
   */
  name: 'apko' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/chainguard-dev/apko' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/chainguard-dev/apko' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/chainguard-dev/apko' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/chainguard-dev/apko -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/chainguard-dev/apko' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/chainguard-dev/apko/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomchainguarddevapkoPackage = typeof githubcomchainguarddevapkoPackage
