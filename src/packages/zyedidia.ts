/**
 * **zyedidia** - pkgx package
 *
 * @domain `github.com/zyedidia`
 *
 * @install `pkgx github.com/zyedidia`
 * @name `zyedidia`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.zyedidia
 * // Or access via domain
 * const samePkg = pantry.githubcomzyedidia
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "zyedidia"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/zyedidia.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const zyedidiaPackage = {
  /**
   * The display name of this package.
   */
  name: 'zyedidia' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/zyedidia' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/zyedidia' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/zyedidia' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/zyedidia' as const,
}

export type ZyedidiaPackage = typeof zyedidiaPackage
