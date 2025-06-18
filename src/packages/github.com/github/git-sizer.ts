/**
 * **git-sizer** - Compute various size metrics for a Git repository, flagging those that might cause problems
 *
 * @domain `github.com/github/git-sizer`
 * @programs `git-sizer`
 * @version `1.5.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install git-sizer`
 * @name `git-sizer`
 * @dependencies `go.dev^1.17`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.gitsizer
 * // Or access via domain
 * const samePkg = pantry.githubcomgithubgitsizer
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "git-sizer"
 * console.log(pkg.description) // "Compute various size metrics for a Git reposito..."
 * console.log(pkg.programs)    // ["git-sizer"]
 * console.log(pkg.versions[0]) // "1.5.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/github/git-sizer.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gitsizerPackage = {
  /**
   * The display name of this package.
   */
  name: 'git-sizer' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/github/git-sizer' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Compute various size metrics for a Git repository, flagging those that might cause problems' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/github/git-sizer/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install git-sizer' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'git-sizer',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'go.dev^1.17',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.5.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type GitsizerPackage = typeof gitsizerPackage
