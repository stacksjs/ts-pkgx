/**
 * **romanz** - pkgx package
 *
 * @domain `github.com/romanz`
 *
 * @install `pkgx github.com/romanz`
 * @name `romanz`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.romanz
 * // Or access via domain
 * const samePkg = pantry.githubcomromanz
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "romanz"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/romanz.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const romanzPackage = {
  /**
   * The display name of this package.
   */
  name: 'romanz' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/romanz' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/romanz' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/romanz' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/romanz' as const,
}

export type RomanzPackage = typeof romanzPackage
