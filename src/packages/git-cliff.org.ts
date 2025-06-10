/**
 * **git-cliff** - A highly customizable Changelog Generator that follows Conventional Commit specifications ⛰️
 *
 * @domain `git-cliff.org`
 * @programs `git-cliff`
 * @version `2.9.1` (23 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/git-cliff-org.md
 *
 * @install `sh <(curl https://pkgx.sh) git-cliff`
 * @name `git-cliff`
 * @dependencies `libgit2.org~1.7`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.gitcliff
 * // Or access via domain
 * const samePkg = pantry.gitclifforg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "git-cliff"
 * console.log(pkg.description) // "A highly customizable Changelog Generator that ..."
 * console.log(pkg.programs)    // ["git-cliff"]
 * console.log(pkg.versions[0]) // "2.9.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/git-cliff-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gitcliffPackage = {
  /**
   * The display name of this package.
   */
  name: 'git-cliff' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'git-cliff.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A highly customizable Changelog Generator that follows Conventional Commit specifications ⛰️' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/git-cliff.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) git-cliff' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'git-cliff',
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
    '2.9.1',
    '2.9.0',
    '2.8.0',
    '2.7.0',
    '2.6.1',
    '2.6.0',
    '2.5.0',
    '2.4.0',
    '2.3.0',
    '2.2.2',
    '2.2.1',
    '2.2.0',
    '2.1.2',
    '2.1.1',
    '2.0.4',
    '2.0.3',
    '2.0.2',
    '2.0.1',
    '2.0.0',
    '1.4.0',
    '1.3.1',
    '1.3.0',
    '1.2.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'git-cliff.org' as const,
}

export type GitcliffPackage = typeof gitcliffPackage
