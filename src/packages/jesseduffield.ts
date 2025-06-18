/**
 * **jesseduffield** - pkgx package
 *
 * @domain `github.com/jesseduffield`
 *
 * @install `pkgx github.com/jesseduffield`
 * @name `jesseduffield`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.jesseduffield
 * // Or access via domain
 * const samePkg = pantry.githubcomjesseduffield
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "jesseduffield"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/jesseduffield.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const jesseduffieldPackage = {
  /**
   * The display name of this package.
   */
  name: 'jesseduffield' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/jesseduffield' as const,
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
  installCommand: 'pkgx github.com/jesseduffield' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/jesseduffield' as const,
}

export type JesseduffieldPackage = typeof jesseduffieldPackage
