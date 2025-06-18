/**
 * **google** - pkgx package
 *
 * @domain `github.com/google`
 *
 * @install `pkgx github.com/google`
 * @name `google`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.google
 * // Or access via domain
 * const samePkg = pantry.githubcomgoogle
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "google"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/google.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const googlePackage = {
  /**
   * The display name of this package.
   */
  name: 'google' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/google' as const,
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
  installCommand: 'pkgx github.com/google' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/google' as const,
}

export type GooglePackage = typeof googlePackage
