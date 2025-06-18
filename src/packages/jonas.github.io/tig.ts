/**
 * **tig** - Text interface for Git repositories
 *
 * @domain `jonas.github.io/tig`
 * @programs `tig`
 * @version `2.5.12` (5 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) tig`
 * @name `tig`
 * @dependencies `gnu.org/libiconv^1`, `invisible-island.net/ncurses^6`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.tig
 * // Or access via domain
 * const samePkg = pantry.jonasgithubiotig
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "tig"
 * console.log(pkg.description) // "Text interface for Git repositories"
 * console.log(pkg.programs)    // ["tig"]
 * console.log(pkg.versions[0]) // "2.5.12" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/jonas-github-io/tig.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const tigPackage = {
  /**
   * The display name of this package.
   */
  name: 'tig' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'jonas.github.io/tig' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Text interface for Git repositories' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/jonas.github.io/tig/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) tig' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'tig',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnu.org/libiconv^1',
    'invisible-island.net/ncurses^6',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.5.12',
    '2.5.11',
    '2.5.10',
    '2.5.9',
    '2.5.8',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'jonas.github.io/tig' as const,
}

export type TigPackage = typeof tigPackage
