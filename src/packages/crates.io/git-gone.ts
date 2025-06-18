/**
 * **git-gone** - Cleanup stale Git branches of pull requests
 *
 * @domain `crates.io/git-gone`
 * @programs `git-gone`
 * @version `1.2.5` (7 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) git-gone`
 * @name `git-gone`
 * @dependencies `libgit2.org~1.7`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.gitgone
 * // Or access via domain
 * const samePkg = pantry.cratesiogitgone
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "git-gone"
 * console.log(pkg.description) // "Cleanup stale Git branches of pull requests"
 * console.log(pkg.programs)    // ["git-gone"]
 * console.log(pkg.versions[0]) // "1.2.5" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/git-gone.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gitgonePackage = {
  /**
   * The display name of this package.
   */
  name: 'git-gone' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/git-gone' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Cleanup stale Git branches of pull requests' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/git-gone/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) git-gone' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'git-gone',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'libgit2.org~1.7',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.2.5',
    '1.2.4',
    '1.2.2',
    '1.2.0',
    '1.1.1',
    '1.1.0',
    '1.0.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'crates.io/git-gone' as const,
}

export type GitgonePackage = typeof gitgonePackage
