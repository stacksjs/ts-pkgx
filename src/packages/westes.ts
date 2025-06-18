/**
 * **westes** - pkgx package
 *
 * @domain `github.com/westes`
 *
 * @install `pkgx github.com/westes`
 * @name `westes`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.westes
 * // Or access via domain
 * const samePkg = pantry.githubcomwestes
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "westes"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/westes.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const westesPackage = {
  /**
   * The display name of this package.
   */
  name: 'westes' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/westes' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/westes' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/westes' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/westes' as const,
}

export type WestesPackage = typeof westesPackage
