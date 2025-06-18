/**
 * **fastfloat** - pkgx package
 *
 * @domain `github.com/fastfloat`
 *
 * @install `pkgx github.com/fastfloat`
 * @name `fastfloat`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.fastfloat
 * // Or access via domain
 * const samePkg = pantry.githubcomfastfloat
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "fastfloat"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/fastfloat.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const fastfloatPackage = {
  /**
   * The display name of this package.
   */
  name: 'fastfloat' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/fastfloat' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/fastfloat' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/fastfloat' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/fastfloat' as const,
}

export type FastfloatPackage = typeof fastfloatPackage
