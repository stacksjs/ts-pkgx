/**
 * **antfu** - pkgx package
 *
 * @domain `github.com/antfu`
 *
 * @install `pkgx github.com/antfu`
 * @name `antfu`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.antfu
 * // Or access via domain
 * const samePkg = pantry.githubcomantfu
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "antfu"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/antfu.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const antfuPackage = {
  /**
   * The display name of this package.
   */
  name: 'antfu' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/antfu' as const,
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
  installCommand: 'pkgx github.com/antfu' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/antfu' as const,
}

export type AntfuPackage = typeof antfuPackage
