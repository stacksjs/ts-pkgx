/**
 * **git-filter-repo** - Quickly rewrite git repository history (filter-branch replacement)
 *
 * @domain `github.com/newren/git-filter-repo`
 * @programs `git-filter-repo`
 * @version `2.47.0` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install git-filter-repo`
 * @name `git-filter-repo`
 * @dependencies `python.org>=3.6`, `git-scm.org`
 * @companions `git-scm.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.gitfilterrepo
 * // Or access via domain
 * const samePkg = pantry.githubcomnewrengitfilterrepo
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "git-filter-repo"
 * console.log(pkg.description) // "Quickly rewrite git repository history (filter-..."
 * console.log(pkg.programs)    // ["git-filter-repo"]
 * console.log(pkg.versions[0]) // "2.47.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/newren/git-filter-repo.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gitfilterrepoPackage = {
  /**
   * The display name of this package.
   */
  name: 'git-filter-repo' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/newren/git-filter-repo' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Quickly rewrite git repository history (filter-branch replacement)' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/newren/git-filter-repo/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install git-filter-repo' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'git-filter-repo',
  ] as const,
  /**
   * Related packages that work well with this package.
   * Consider installing these for enhanced functionality.
   */
  companions: [
    'git-scm.org',
  ] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org>=3.6',
    'git-scm.org',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.47.0',
    '2.45.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type GitfilterrepoPackage = typeof gitfilterrepoPackage
