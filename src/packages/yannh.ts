/**
 * **yannh** - pkgx package
 *
 * @domain `github.com/yannh`
 *
 * @install `pkgx github.com/yannh`
 * @name `yannh`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.yannh
 * // Or access via domain
 * const samePkg = pantry.githubcomyannh
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "yannh"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/yannh.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const yannhPackage = {
  /**
   * The display name of this package.
   */
  name: 'yannh' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/yannh' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/yannh' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/yannh' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/yannh' as const,
}

export type YannhPackage = typeof yannhPackage
