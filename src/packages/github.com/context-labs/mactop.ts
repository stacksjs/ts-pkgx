/**
 * **mactop** - Package from pantry: github.com/context-labs/mactop
 *
 * @domain `github.com/context-labs/mactop`
 *
 * @install `launchpad install github.com/context-labs/mactop`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomcontextlabsmactop
 * console.log(pkg.name)        // "mactop"
 * console.log(pkg.description) // "Package from pantry: github.com/context-labs/ma..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/context-labs/mactop.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomcontextlabsmactopPackage = {
  /**
   * The display name of this package.
   */
  name: 'mactop' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/context-labs/mactop' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/context-labs/mactop' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/context-labs/mactop' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/context-labs/mactop -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/context-labs/mactop' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/context-labs/mactop/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomcontextlabsmactopPackage = typeof githubcomcontextlabsmactopPackage
