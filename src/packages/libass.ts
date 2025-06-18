/**
 * **libass** - pkgx package
 *
 * @domain `github.com/libass`
 *
 * @install `pkgx github.com/libass`
 * @name `libass`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.libass
 * // Or access via domain
 * const samePkg = pantry.githubcomlibass
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "libass"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/libass.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libassPackage = {
  /**
   * The display name of this package.
   */
  name: 'libass' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/libass' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/libass' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/libass' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/libass' as const,
}

export type LibassPackage = typeof libassPackage
