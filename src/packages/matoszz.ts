/**
 * **matoszz** - pkgx package
 *
 * @domain `github.com/matoszz`
 *
 * @install `pkgx github.com/matoszz`
 * @name `matoszz`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.matoszz
 * // Or access via domain
 * const samePkg = pantry.githubcommatoszz
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "matoszz"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/matoszz.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const matoszzPackage = {
  /**
   * The display name of this package.
   */
  name: 'matoszz' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/matoszz' as const,
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
  installCommand: 'pkgx github.com/matoszz' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/matoszz' as const,
}

export type MatoszzPackage = typeof matoszzPackage
