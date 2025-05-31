/**
 * **git2** - A cross-platform, linkable library implementation of Git that you can use in your application.
 *
 * @domain `libgit2.org`
 * @programs `git2`
 * @version `1.9.0` (11 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/libgit2-org.md
 * @install `sh <(curl https://pkgx.sh) git2`
 * @aliases `git2`
 * @dependencies `libssh2.org^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.git2
 * // Or access via domain
 * const samePkg = pantry.libgit2org
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "git2"
 * console.log(pkg.description) // "A cross-platform, linkable library implementati..."
 * console.log(pkg.programs)    // ["git2"]
 * console.log(pkg.versions[0]) // "1.9.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/libgit2-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const git2Package = {
  /**
   * The display name of this package.
   */
  name: 'git2' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'libgit2.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A cross-platform, linkable library implementation of Git that you can use in your application.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/libgit2.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) git2' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'git2',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'libssh2.org^1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.9.0',
    '1.8.4',
    '1.8.3',
    '1.8.2',
    '1.8.1',
    '1.8.0',
    '1.7.2',
    '1.7.1',
    '1.7.0',
    '1.6.5',
    '1.6.4',
  ] as const,
  fullPath: 'libgit2.org' as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'git2',
  ] as const,
}

export type Git2Package = typeof git2Package
