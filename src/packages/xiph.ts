/**
 * **xiph** - pkgx package
 *
 * @domain `github.com/xiph`
 *
 * @install `pkgx github.com/xiph`
 * @name `xiph`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.xiph
 * // Or access via domain
 * const samePkg = pantry.githubcomxiph
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "xiph"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/xiph.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xiphPackage = {
  /**
   * The display name of this package.
   */
  name: 'xiph' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/xiph' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/xiph' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/xiph' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/xiph' as const,
}

export type XiphPackage = typeof xiphPackage
