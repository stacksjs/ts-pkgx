/**
 * **gopasspw** - pkgx package
 *
 * @domain `github.com/gopasspw`
 *
 * @install `pkgx github.com/gopasspw`
 * @name `gopasspw`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.gopasspw
 * // Or access via domain
 * const samePkg = pantry.githubcomgopasspw
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "gopasspw"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/gopasspw.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gopasspwPackage = {
  /**
   * The display name of this package.
   */
  name: 'gopasspw' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/gopasspw' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/gopasspw' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/gopasspw' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/gopasspw' as const,
}

export type GopasspwPackage = typeof gopasspwPackage
