/**
 * **internetarchive** - Package from pantry: github.com/jjjake/internetarchive
 *
 * @domain `github.com/jjjake/internetarchive`
 *
 * @install `launchpad install github.com/jjjake/internetarchive`
 * @dependencies `python.org~3.11`, `gnu.org/which^2 # our stubs use which`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomjjjakeinternetarchive
 * console.log(pkg.name)        // "internetarchive"
 * console.log(pkg.description) // "Package from pantry: github.com/jjjake/internet..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/jjjake/internetarchive.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomjjjakeinternetarchivePackage = {
  /**
   * The display name of this package.
   */
  name: 'internetarchive' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/jjjake/internetarchive' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/jjjake/internetarchive' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/jjjake/internetarchive' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/jjjake/internetarchive -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/jjjake/internetarchive' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org~3.11',
    'gnu.org/which^2 # our stubs use which',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/jjjake/internetarchive/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomjjjakeinternetarchivePackage = typeof githubcomjjjakeinternetarchivePackage
