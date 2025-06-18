/**
 * **Cyan4973** - pkgx package
 *
 * @domain `github.com/Cyan4973`
 *
 * @install `pkgx github.com/Cyan4973`
 * @name `Cyan4973`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.Cyan4973
 * // Or access via domain
 * const samePkg = pantry.githubcomcyan4973
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "Cyan4973"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/Cyan4973.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cyan4973Package = {
  /**
   * The display name of this package.
   */
  name: 'Cyan4973' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/Cyan4973' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/Cyan4973' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/Cyan4973' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/Cyan4973' as const,
}

export type Cyan4973Package = typeof cyan4973Package
