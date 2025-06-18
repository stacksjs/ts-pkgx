/**
 * **git-lfs** - Git extension for versioning large files
 *
 * @domain `git-lfs.com`
 * @programs `git-lfs`
 * @version `3.6.1` (6 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) git-lfs`
 * @name `git-lfs`
 * @dependencies `git-scm.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.gitlfs
 * // Or access via domain
 * const samePkg = pantry.gitlfscom
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "git-lfs"
 * console.log(pkg.description) // "Git extension for versioning large files"
 * console.log(pkg.programs)    // ["git-lfs"]
 * console.log(pkg.versions[0]) // "3.6.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/git-lfs-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gitlfsPackage = {
  /**
   * The display name of this package.
   */
  name: 'git-lfs' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'git-lfs.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Git extension for versioning large files' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/git-lfs.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) git-lfs' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'git-lfs',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'git-scm.org',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.6.1',
    '3.6.0',
    '3.5.1',
    '3.4.1',
    '3.4.0',
    '3.3.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'git-lfs' as const,
}

export type GitlfsPackage = typeof gitlfsPackage
