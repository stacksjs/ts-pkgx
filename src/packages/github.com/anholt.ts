/**
 * **anholt** - pkgx package
 *
 * @domain `github.com/anholt`
 *
 * @install `pkgx github.com/anholt`
 * @name `anholt`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.anholt
 * // Or access via domain
 * const samePkg = pantry.githubcomanholt
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "anholt"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/anholt.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const anholtPackage = {
  /**
   * The display name of this package.
   */
  name: 'anholt' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/anholt' as const,
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
  installCommand: 'pkgx github.com/anholt' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/anholt' as const,
}

export type AnholtPackage = typeof anholtPackage
