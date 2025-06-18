/**
 * **MilesCranmer** - pkgx package
 *
 * @domain `github.com/MilesCranmer`
 *
 * @install `pkgx github.com/MilesCranmer`
 * @name `MilesCranmer`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.MilesCranmer
 * // Or access via domain
 * const samePkg = pantry.githubcommilescranmer
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "MilesCranmer"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/MilesCranmer.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const milesCranmerPackage = {
  /**
   * The display name of this package.
   */
  name: 'MilesCranmer' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/MilesCranmer' as const,
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
  installCommand: 'pkgx github.com/MilesCranmer' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/MilesCranmer' as const,
}

export type MilesCranmerPackage = typeof milesCranmerPackage
