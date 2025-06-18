/**
 * **thom311** - pkgx package
 *
 * @domain `github.com/thom311`
 *
 * @install `pkgx github.com/thom311`
 * @name `thom311`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.thom311
 * // Or access via domain
 * const samePkg = pantry.githubcomthom311
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "thom311"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/thom311.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const thom311Package = {
  /**
   * The display name of this package.
   */
  name: 'thom311' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/thom311' as const,
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
  installCommand: 'pkgx github.com/thom311' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/thom311' as const,
}

export type Thom311Package = typeof thom311Package
