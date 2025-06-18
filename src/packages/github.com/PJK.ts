/**
 * **PJK** - pkgx package
 *
 * @domain `github.com/PJK`
 *
 * @install `pkgx github.com/PJK`
 * @name `PJK`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.PJK
 * // Or access via domain
 * const samePkg = pantry.githubcompjk
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "PJK"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/PJK.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pJKPackage = {
  /**
   * The display name of this package.
   */
  name: 'PJK' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/PJK' as const,
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
  installCommand: 'pkgx github.com/PJK' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/PJK' as const,
}

export type PJKPackage = typeof pJKPackage
