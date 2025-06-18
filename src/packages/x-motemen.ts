/**
 * **x-motemen** - pkgx package
 *
 * @domain `github.com/x-motemen`
 *
 * @install `pkgx github.com/x-motemen`
 * @name `x-motemen`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.xmotemen
 * // Or access via domain
 * const samePkg = pantry.githubcomxmotemen
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "x-motemen"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/x-motemen.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xmotemenPackage = {
  /**
   * The display name of this package.
   */
  name: 'x-motemen' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/x-motemen' as const,
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
  installCommand: 'pkgx github.com/x-motemen' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/x-motemen' as const,
}

export type XmotemenPackage = typeof xmotemenPackage
