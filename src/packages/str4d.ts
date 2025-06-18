/**
 * **str4d** - pkgx package
 *
 * @domain `github.com/str4d`
 *
 * @install `pkgx github.com/str4d`
 * @name `str4d`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.str4d
 * // Or access via domain
 * const samePkg = pantry.githubcomstr4d
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "str4d"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/str4d.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const str4dPackage = {
  /**
   * The display name of this package.
   */
  name: 'str4d' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/str4d' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/str4d' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/str4d' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/str4d' as const,
}

export type Str4dPackage = typeof str4dPackage
