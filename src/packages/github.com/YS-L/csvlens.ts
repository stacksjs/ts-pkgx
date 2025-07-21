/**
 * **csvlens** - Package from pantry: github.com/YS-L/csvlens
 *
 * @domain `github.com/YS-L/csvlens`
 *
 * @install `launchpad install github.com/YS-L/csvlens`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomyslcsvlens
 * console.log(pkg.name)        // "csvlens"
 * console.log(pkg.description) // "Package from pantry: github.com/YS-L/csvlens"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/YS-L/csvlens.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomyslcsvlensPackage = {
  /**
   * The display name of this package.
   */
  name: 'csvlens' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/YS-L/csvlens' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/YS-L/csvlens' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/YS-L/csvlens' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/YS-L/csvlens -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/YS-L/csvlens' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/YS-L/csvlens/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomyslcsvlensPackage = typeof githubcomyslcsvlensPackage
