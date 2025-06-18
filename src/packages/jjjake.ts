/**
 * **jjjake** - pkgx package
 *
 * @domain `github.com/jjjake`
 *
 * @install `pkgx github.com/jjjake`
 * @name `jjjake`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.jjjake
 * // Or access via domain
 * const samePkg = pantry.githubcomjjjake
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "jjjake"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/jjjake.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const jjjakePackage = {
  /**
   * The display name of this package.
   */
  name: 'jjjake' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/jjjake' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/jjjake' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/jjjake' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/jjjake' as const,
}

export type JjjakePackage = typeof jjjakePackage
