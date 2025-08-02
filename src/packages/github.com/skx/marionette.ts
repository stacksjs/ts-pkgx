/**
 * **marionette** - Package from pantry: github.com/skx/marionette
 *
 * @domain `github.com/skx/marionette`
 *
 * @install `launchpad install github.com/skx/marionette`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomskxmarionette
 * console.log(pkg.name)        // "marionette"
 * console.log(pkg.description) // "Package from pantry: github.com/skx/marionette"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/skx/marionette.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomskxmarionettePackage = {
  /**
   * The display name of this package.
   */
  name: 'marionette' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/skx/marionette' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/skx/marionette' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/skx/marionette' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/skx/marionette -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/skx/marionette' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/skx/marionette/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomskxmarionettePackage = typeof githubcomskxmarionettePackage
