/**
 * **maxbrunsfeld** - pkgx package
 *
 * @domain `github.com/maxbrunsfeld`
 *
 * @install `pkgx github.com/maxbrunsfeld`
 * @name `maxbrunsfeld`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.maxbrunsfeld
 * // Or access via domain
 * const samePkg = pantry.githubcommaxbrunsfeld
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "maxbrunsfeld"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/maxbrunsfeld.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const maxbrunsfeldPackage = {
  /**
   * The display name of this package.
   */
  name: 'maxbrunsfeld' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/maxbrunsfeld' as const,
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
  installCommand: 'pkgx github.com/maxbrunsfeld' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/maxbrunsfeld' as const,
}

export type MaxbrunsfeldPackage = typeof maxbrunsfeldPackage
