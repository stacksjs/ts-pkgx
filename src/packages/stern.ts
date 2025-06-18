/**
 * **stern** - pkgx package
 *
 * @domain `github.com/stern`
 *
 * @install `pkgx github.com/stern`
 * @name `stern`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.stern
 * // Or access via domain
 * const samePkg = pantry.githubcomstern
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "stern"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/stern.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const sternPackage = {
  /**
   * The display name of this package.
   */
  name: 'stern' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/stern' as const,
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
  installCommand: 'pkgx github.com/stern' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/stern' as const,
}

export type SternPackage = typeof sternPackage
