/**
 * **psf** - pkgx package
 *
 * @domain `github.com/psf`
 *
 * @install `pkgx github.com/psf`
 * @name `psf`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.psf
 * // Or access via domain
 * const samePkg = pantry.githubcompsf
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "psf"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/psf.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const psfPackage = {
  /**
   * The display name of this package.
   */
  name: 'psf' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/psf' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/psf' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/psf' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/psf' as const,
}

export type PsfPackage = typeof psfPackage
