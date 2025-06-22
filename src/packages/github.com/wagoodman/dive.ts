/**
 * **dive** - Package from pantry: github.com/wagoodman/dive
 *
 * @domain `github.com/wagoodman/dive`
 *
 * @install `launchpad install github.com/wagoodman/dive`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomwagoodmandive
 * console.log(pkg.name)        // "dive"
 * console.log(pkg.description) // "Package from pantry: github.com/wagoodman/dive"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/wagoodman/dive.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomwagoodmandivePackage = {
  /**
   * The display name of this package.
   */
  name: 'dive' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/wagoodman/dive' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/wagoodman/dive' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/wagoodman/dive' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/wagoodman/dive -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/wagoodman/dive' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/wagoodman/dive/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomwagoodmandivePackage = typeof githubcomwagoodmandivePackage
