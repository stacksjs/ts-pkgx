/**
 * **libsndfile** - pkgx package
 *
 * @domain `github.com/libsndfile`
 *
 * @install `pkgx github.com/libsndfile`
 * @name `libsndfile`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.libsndfile
 * // Or access via domain
 * const samePkg = pantry.githubcomlibsndfile
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "libsndfile"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/libsndfile.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libsndfilePackage = {
  /**
   * The display name of this package.
   */
  name: 'libsndfile' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/libsndfile' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/libsndfile' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/libsndfile' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/libsndfile' as const,
}

export type LibsndfilePackage = typeof libsndfilePackage
