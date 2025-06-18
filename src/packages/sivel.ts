/**
 * **sivel** - pkgx package
 *
 * @domain `github.com/sivel`
 *
 * @install `pkgx github.com/sivel`
 * @name `sivel`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.sivel
 * // Or access via domain
 * const samePkg = pantry.githubcomsivel
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "sivel"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/sivel.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const sivelPackage = {
  /**
   * The display name of this package.
   */
  name: 'sivel' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/sivel' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/sivel' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/sivel' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/sivel' as const,
}

export type SivelPackage = typeof sivelPackage
