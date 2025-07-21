/**
 * **csvdiff** - Package from pantry: github.com/aswinkarthik/csvdiff
 *
 * @domain `github.com/aswinkarthik/csvdiff`
 *
 * @install `launchpad install github.com/aswinkarthik/csvdiff`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomaswinkarthikcsvdiff
 * console.log(pkg.name)        // "csvdiff"
 * console.log(pkg.description) // "Package from pantry: github.com/aswinkarthik/cs..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/aswinkarthik/csvdiff.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomaswinkarthikcsvdiffPackage = {
  /**
   * The display name of this package.
   */
  name: 'csvdiff' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/aswinkarthik/csvdiff' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/aswinkarthik/csvdiff' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/aswinkarthik/csvdiff' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/aswinkarthik/csvdiff -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/aswinkarthik/csvdiff' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/aswinkarthik/csvdiff/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomaswinkarthikcsvdiffPackage = typeof githubcomaswinkarthikcsvdiffPackage
