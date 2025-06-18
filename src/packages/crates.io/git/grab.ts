/**
 * **crates.io/git-grab** - pkgx package
 *
 * @domain `crates.io/git/grab`
 *
 * @install `pkgx crates.io/git-grab`
 * @name `git-grab`
 * @aliases `crates.io/git-grab`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.cratesiogitgrab
 * // Or access via domain
 * const samePkg = pantry.cratesiogitgrab
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "git-grab"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/git/grab.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiogitgrabPackage = {
  /**
   * The display name of this package.
   */
  name: 'git-grab' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/git/grab' as const,
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
  installCommand: 'pkgx crates.io/git-grab' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'crates.io/git-grab',
  ] as const,
  fullPath: 'crates.io/git-grab' as const,
}

export type CratesiogitgrabPackage = typeof cratesiogitgrabPackage
