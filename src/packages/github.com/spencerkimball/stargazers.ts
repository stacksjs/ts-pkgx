/**
 * **stargazers** - Analyze GitHub stars
 *
 * @domain `github.com/spencerkimball/stargazers`
 * @programs `stargazers`
 * @version `0.0.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install stargazers`
 * @name `stargazers`
 * @dependencies `go.dev^1.16.15`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.stargazers
 * // Or access via domain
 * const samePkg = pantry.githubcomspencerkimballstargazers
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "stargazers"
 * console.log(pkg.description) // "Analyze GitHub stars"
 * console.log(pkg.programs)    // ["stargazers"]
 * console.log(pkg.versions[0]) // "0.0.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/spencerkimball/stargazers.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const stargazersPackage = {
  /**
   * The display name of this package.
   */
  name: 'stargazers' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/spencerkimball/stargazers' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Analyze GitHub stars' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/spencerkimball/stargazers/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install stargazers' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'stargazers',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'go.dev^1.16.15',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.0.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type StargazersPackage = typeof stargazersPackage
