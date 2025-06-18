/**
 * **a7ex** - pkgx package
 *
 * @domain `github.com/a7ex`
 *
 * @install `pkgx github.com/a7ex`
 * @name `a7ex`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.a7ex
 * // Or access via domain
 * const samePkg = pantry.githubcoma7ex
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "a7ex"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/a7ex.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const a7exPackage = {
  /**
   * The display name of this package.
   */
  name: 'a7ex' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/a7ex' as const,
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
  installCommand: 'pkgx github.com/a7ex' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/a7ex' as const,
}

export type A7exPackage = typeof a7exPackage
