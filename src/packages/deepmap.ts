/**
 * **deepmap** - pkgx package
 *
 * @domain `github.com/deepmap`
 *
 * @install `pkgx github.com/deepmap`
 * @name `deepmap`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.deepmap
 * // Or access via domain
 * const samePkg = pantry.githubcomdeepmap
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "deepmap"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/deepmap.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const deepmapPackage = {
  /**
   * The display name of this package.
   */
  name: 'deepmap' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/deepmap' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/deepmap' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/deepmap' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/deepmap' as const,
}

export type DeepmapPackage = typeof deepmapPackage
