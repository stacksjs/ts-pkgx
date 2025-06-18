/**
 * **axllent** - pkgx package
 *
 * @domain `github.com/axllent`
 *
 * @install `pkgx github.com/axllent`
 * @name `axllent`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.axllent
 * // Or access via domain
 * const samePkg = pantry.githubcomaxllent
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "axllent"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/axllent.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const axllentPackage = {
  /**
   * The display name of this package.
   */
  name: 'axllent' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/axllent' as const,
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
  installCommand: 'pkgx github.com/axllent' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/axllent' as const,
}

export type AxllentPackage = typeof axllentPackage
