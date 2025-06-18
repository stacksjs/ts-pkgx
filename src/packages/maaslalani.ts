/**
 * **maaslalani** - pkgx package
 *
 * @domain `github.com/maaslalani`
 *
 * @install `pkgx github.com/maaslalani`
 * @name `maaslalani`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.maaslalani
 * // Or access via domain
 * const samePkg = pantry.githubcommaaslalani
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "maaslalani"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/maaslalani.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const maaslalaniPackage = {
  /**
   * The display name of this package.
   */
  name: 'maaslalani' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/maaslalani' as const,
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
  installCommand: 'pkgx github.com/maaslalani' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/maaslalani' as const,
}

export type MaaslalaniPackage = typeof maaslalaniPackage
