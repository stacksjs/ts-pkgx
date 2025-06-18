/**
 * **thinkst** - pkgx package
 *
 * @domain `github.com/thinkst`
 *
 * @install `pkgx github.com/thinkst`
 * @name `thinkst`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.thinkst
 * // Or access via domain
 * const samePkg = pantry.githubcomthinkst
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "thinkst"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/thinkst.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const thinkstPackage = {
  /**
   * The display name of this package.
   */
  name: 'thinkst' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/thinkst' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/thinkst' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/thinkst' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/thinkst' as const,
}

export type ThinkstPackage = typeof thinkstPackage
