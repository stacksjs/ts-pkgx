/**
 * **scc** - Package from pantry: github.com/boyter/scc
 *
 * @domain `github.com/boyter/scc`
 *
 * @install `launchpad install github.com/boyter/scc`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomboyterscc
 * console.log(pkg.name)        // "scc"
 * console.log(pkg.description) // "Package from pantry: github.com/boyter/scc"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/boyter/scc.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomboytersccPackage = {
  /**
   * The display name of this package.
   */
  name: 'scc' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/boyter/scc' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/boyter/scc' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/boyter/scc' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/boyter/scc -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/boyter/scc' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/boyter/scc/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomboytersccPackage = typeof githubcomboytersccPackage
