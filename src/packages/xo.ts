/**
 * **xo** - pkgx package
 *
 * @domain `github.com/xo`
 *
 * @install `pkgx github.com/xo`
 * @name `xo`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.xo
 * // Or access via domain
 * const samePkg = pantry.githubcomxo
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "xo"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/xo.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xoPackage = {
  /**
   * The display name of this package.
   */
  name: 'xo' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/xo' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/xo' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/xo' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/xo' as const,
}

export type XoPackage = typeof xoPackage
