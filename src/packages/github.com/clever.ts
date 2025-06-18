/**
 * **clever** - pkgx package
 *
 * @domain `github.com/clever`
 *
 * @install `pkgx github.com/clever`
 * @name `clever`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.clever
 * // Or access via domain
 * const samePkg = pantry.githubcomclever
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "clever"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/clever.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cleverPackage = {
  /**
   * The display name of this package.
   */
  name: 'clever' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/clever' as const,
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
  installCommand: 'pkgx github.com/clever' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/clever' as const,
}

export type CleverPackage = typeof cleverPackage
