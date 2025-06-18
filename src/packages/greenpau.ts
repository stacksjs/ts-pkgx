/**
 * **greenpau** - pkgx package
 *
 * @domain `github.com/greenpau`
 *
 * @install `pkgx github.com/greenpau`
 * @name `greenpau`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.greenpau
 * // Or access via domain
 * const samePkg = pantry.githubcomgreenpau
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "greenpau"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/greenpau.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const greenpauPackage = {
  /**
   * The display name of this package.
   */
  name: 'greenpau' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/greenpau' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/greenpau' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/greenpau' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/greenpau' as const,
}

export type GreenpauPackage = typeof greenpauPackage
