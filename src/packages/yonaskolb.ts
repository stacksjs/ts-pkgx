/**
 * **yonaskolb** - pkgx package
 *
 * @domain `github.com/yonaskolb`
 *
 * @install `pkgx github.com/yonaskolb`
 * @name `yonaskolb`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.yonaskolb
 * // Or access via domain
 * const samePkg = pantry.githubcomyonaskolb
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "yonaskolb"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/yonaskolb.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const yonaskolbPackage = {
  /**
   * The display name of this package.
   */
  name: 'yonaskolb' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/yonaskolb' as const,
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
  installCommand: 'pkgx github.com/yonaskolb' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/yonaskolb' as const,
}

export type YonaskolbPackage = typeof yonaskolbPackage
