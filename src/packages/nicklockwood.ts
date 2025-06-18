/**
 * **nicklockwood** - pkgx package
 *
 * @domain `github.com/nicklockwood`
 *
 * @install `pkgx github.com/nicklockwood`
 * @name `nicklockwood`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.nicklockwood
 * // Or access via domain
 * const samePkg = pantry.githubcomnicklockwood
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "nicklockwood"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/nicklockwood.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const nicklockwoodPackage = {
  /**
   * The display name of this package.
   */
  name: 'nicklockwood' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/nicklockwood' as const,
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
  installCommand: 'pkgx github.com/nicklockwood' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/nicklockwood' as const,
}

export type NicklockwoodPackage = typeof nicklockwoodPackage
