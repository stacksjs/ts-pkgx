/**
 * **platformdirs** - pkgx package
 *
 * @domain `github.com/platformdirs`
 *
 * @install `pkgx github.com/platformdirs`
 * @name `platformdirs`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.platformdirs
 * // Or access via domain
 * const samePkg = pantry.githubcomplatformdirs
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "platformdirs"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/platformdirs.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const platformdirsPackage = {
  /**
   * The display name of this package.
   */
  name: 'platformdirs' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/platformdirs' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/platformdirs' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/platformdirs' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/platformdirs' as const,
}

export type PlatformdirsPackage = typeof platformdirsPackage
