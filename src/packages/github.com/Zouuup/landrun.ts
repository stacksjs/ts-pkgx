/**
 * **landrun** - pkgx package
 *
 * @domain `github.com/Zouuup/landrun`
 * @version `0.1.14` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install github.com/Zouuup/landrun`
 * @dependencies `go.dev@^1.18`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomzouuuplandrun
 * console.log(pkg.name)        // "landrun"
 * console.log(pkg.versions[0]) // "0.1.14" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/Zouuup/landrun.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomzouuuplandrunPackage = {
  /**
   * The display name of this package.
   */
  name: 'landrun' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/Zouuup/landrun' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/Zouuup/landrun/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/Zouuup/landrun' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/Zouuup/landrun -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/Zouuup/landrun' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'go.dev@^1.18',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.1.14',
  ] as const,
  aliases: [] as const,
}

export type GithubcomzouuuplandrunPackage = typeof githubcomzouuuplandrunPackage
