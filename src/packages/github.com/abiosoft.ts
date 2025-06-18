/**
 * **abiosoft** - pkgx package
 *
 * @domain `github.com/abiosoft`
 *
 * @install `pkgx github.com/abiosoft`
 * @name `abiosoft`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.abiosoft
 * // Or access via domain
 * const samePkg = pantry.githubcomabiosoft
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "abiosoft"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/abiosoft.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const abiosoftPackage = {
  /**
   * The display name of this package.
   */
  name: 'abiosoft' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/abiosoft' as const,
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
  installCommand: 'pkgx github.com/abiosoft' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/abiosoft' as const,
}

export type AbiosoftPackage = typeof abiosoftPackage
