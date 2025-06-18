/**
 * **gosom** - pkgx package
 *
 * @domain `github.com/gosom`
 *
 * @install `pkgx github.com/gosom`
 * @name `gosom`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.gosom
 * // Or access via domain
 * const samePkg = pantry.githubcomgosom
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "gosom"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/gosom.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gosomPackage = {
  /**
   * The display name of this package.
   */
  name: 'gosom' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/gosom' as const,
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
  installCommand: 'pkgx github.com/gosom' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/gosom' as const,
}

export type GosomPackage = typeof gosomPackage
