/**
 * **git-absorb** - git commit --fixup, but automatic
 *
 * @domain `crates.io/git-absorb`
 * @programs `git-absorb`
 * @version `0.8.0` (9 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) git-absorb`
 * @name `git-absorb`
 * @dependencies `libgit2.org~1.7`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.gitabsorb
 * // Or access via domain
 * const samePkg = pantry.cratesiogitabsorb
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "git-absorb"
 * console.log(pkg.description) // "git commit --fixup, but automatic"
 * console.log(pkg.programs)    // ["git-absorb"]
 * console.log(pkg.versions[0]) // "0.8.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/git-absorb.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gitabsorbPackage = {
  /**
   * The display name of this package.
   */
  name: 'git-absorb' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/git-absorb' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'git commit --fixup, but automatic' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/git-absorb/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) git-absorb' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'git-absorb',
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
    '0.8.0',
    '0.7.0',
    '0.6.17',
    '0.6.16',
    '0.6.15',
    '0.6.13',
    '0.6.12',
    '0.6.11',
    '0.6.10',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'crates.io/git-absorb' as const,
}

export type GitabsorbPackage = typeof gitabsorbPackage
