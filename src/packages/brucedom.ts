/**
 * **brucedom** - pkgx package
 *
 * @domain `github.com/brucedom`
 *
 * @install `pkgx github.com/brucedom`
 * @name `brucedom`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.brucedom
 * // Or access via domain
 * const samePkg = pantry.githubcombrucedom
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "brucedom"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/brucedom.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const brucedomPackage = {
  /**
   * The display name of this package.
   */
  name: 'brucedom' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/brucedom' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/brucedom' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/brucedom' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/brucedom' as const,
}

export type BrucedomPackage = typeof brucedomPackage
