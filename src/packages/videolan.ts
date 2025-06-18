/**
 * **videolan** - pkgx package
 *
 * @domain `code.videolan.org/videolan`
 *
 * @install `pkgx code.videolan.org/videolan`
 * @name `videolan`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.videolan
 * // Or access via domain
 * const samePkg = pantry.codevideolanorgvideolan
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "videolan"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/code-videolan-org/videolan.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const videolanPackage = {
  /**
   * The display name of this package.
   */
  name: 'videolan' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'code.videolan.org/videolan' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from code.videolan.org/videolan' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx code.videolan.org/videolan' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'code.videolan.org/videolan' as const,
}

export type VideolanPackage = typeof videolanPackage
