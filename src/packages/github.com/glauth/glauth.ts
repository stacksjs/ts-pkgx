/**
 * **glauth** - Package from pantry: github.com/glauth/glauth
 *
 * @domain `github.com/glauth/glauth`
 *
 * @install `launchpad install github.com/glauth/glauth`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomglauthglauth
 * console.log(pkg.name)        // "glauth"
 * console.log(pkg.description) // "Package from pantry: github.com/glauth/glauth"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/glauth/glauth.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomglauthglauthPackage = {
  /**
   * The display name of this package.
   */
  name: 'glauth' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/glauth/glauth' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/glauth/glauth' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/glauth/glauth' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/glauth/glauth -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/glauth/glauth' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/glauth/glauth/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomglauthglauthPackage = typeof githubcomglauthglauthPackage
