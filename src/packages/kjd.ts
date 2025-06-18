/**
 * **kjd** - pkgx package
 *
 * @domain `github.com/kjd`
 *
 * @install `pkgx github.com/kjd`
 * @name `kjd`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.kjd
 * // Or access via domain
 * const samePkg = pantry.githubcomkjd
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "kjd"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/kjd.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const kjdPackage = {
  /**
   * The display name of this package.
   */
  name: 'kjd' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/kjd' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/kjd' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/kjd' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/kjd' as const,
}

export type KjdPackage = typeof kjdPackage
