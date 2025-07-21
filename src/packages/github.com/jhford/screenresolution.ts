/**
 * **screenresolution** - Package from pantry: github.com/jhford/screenresolution
 *
 * @domain `github.com/jhford/screenresolution`
 *
 * @install `launchpad install github.com/jhford/screenresolution`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomjhfordscreenresolution
 * console.log(pkg.name)        // "screenresolution"
 * console.log(pkg.description) // "Package from pantry: github.com/jhford/screenre..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/jhford/screenresolution.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomjhfordscreenresolutionPackage = {
  /**
   * The display name of this package.
   */
  name: 'screenresolution' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/jhford/screenresolution' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/jhford/screenresolution' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/jhford/screenresolution' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/jhford/screenresolution -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/jhford/screenresolution' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/jhford/screenresolution/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomjhfordscreenresolutionPackage = typeof githubcomjhfordscreenresolutionPackage
