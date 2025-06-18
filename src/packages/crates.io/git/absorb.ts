/**
 * **crates.io/git-absorb** - pkgx package
 *
 * @domain `crates.io/git/absorb`
 *
 * @install `pkgx crates.io/git-absorb`
 * @name `git-absorb`
 * @aliases `crates.io/git-absorb`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.cratesiogitabsorb
 * // Or access via domain
 * const samePkg = pantry.cratesiogitabsorb
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "git-absorb"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/git/absorb.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiogitabsorbPackage = {
  /**
   * The display name of this package.
   */
  name: 'git-absorb' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/git/absorb' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx crates.io/git-absorb' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'crates.io/git-absorb',
  ] as const,
  fullPath: 'crates.io/git-absorb' as const,
}

export type CratesiogitabsorbPackage = typeof cratesiogitabsorbPackage
