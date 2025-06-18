/**
 * **AlDanial** - pkgx package
 *
 * @domain `github.com/AlDanial`
 *
 * @install `pkgx github.com/AlDanial`
 * @name `AlDanial`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.AlDanial
 * // Or access via domain
 * const samePkg = pantry.githubcomaldanial
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "AlDanial"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/AlDanial.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const alDanialPackage = {
  /**
   * The display name of this package.
   */
  name: 'AlDanial' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/AlDanial' as const,
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
  installCommand: 'pkgx github.com/AlDanial' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/AlDanial' as const,
}

export type AlDanialPackage = typeof alDanialPackage
