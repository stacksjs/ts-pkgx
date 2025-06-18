/**
 * **mitsuhiko** - pkgx package
 *
 * @domain `github.com/mitsuhiko`
 *
 * @install `pkgx github.com/mitsuhiko`
 * @name `mitsuhiko`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.mitsuhiko
 * // Or access via domain
 * const samePkg = pantry.githubcommitsuhiko
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "mitsuhiko"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/mitsuhiko.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mitsuhikoPackage = {
  /**
   * The display name of this package.
   */
  name: 'mitsuhiko' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/mitsuhiko' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/mitsuhiko' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/mitsuhiko' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/mitsuhiko' as const,
}

export type MitsuhikoPackage = typeof mitsuhikoPackage
