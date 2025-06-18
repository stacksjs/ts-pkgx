/**
 * **loq9** - pkgx package
 *
 * @domain `github.com/loq9`
 *
 * @install `pkgx github.com/loq9`
 * @name `loq9`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.loq9
 * // Or access via domain
 * const samePkg = pantry.githubcomloq9
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "loq9"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/loq9.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const loq9Package = {
  /**
   * The display name of this package.
   */
  name: 'loq9' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/loq9' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/loq9' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/loq9' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/loq9' as const,
}

export type Loq9Package = typeof loq9Package
