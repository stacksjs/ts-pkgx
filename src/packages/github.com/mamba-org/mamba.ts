/**
 * **mamba** - Package from pantry: github.com/mamba-org/mamba
 *
 * @domain `github.com/mamba-org/mamba`
 *
 * @install `launchpad install github.com/mamba-org/mamba`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcommambaorgmamba
 * console.log(pkg.name)        // "mamba"
 * console.log(pkg.description) // "Package from pantry: github.com/mamba-org/mamba"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/mamba-org/mamba.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcommambaorgmambaPackage = {
  /**
   * The display name of this package.
   */
  name: 'mamba' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/mamba-org/mamba' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/mamba-org/mamba' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/mamba-org/mamba' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/mamba-org/mamba -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/mamba-org/mamba' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/mamba-org/mamba/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcommambaorgmambaPackage = typeof githubcommambaorgmambaPackage
