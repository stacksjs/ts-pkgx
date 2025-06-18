/**
 * **urllib3** - pkgx package
 *
 * @domain `github.com/urllib3`
 *
 * @install `pkgx github.com/urllib3`
 * @name `urllib3`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.urllib3
 * // Or access via domain
 * const samePkg = pantry.githubcomurllib3
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "urllib3"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/urllib3.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const urllib3Package = {
  /**
   * The display name of this package.
   */
  name: 'urllib3' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/urllib3' as const,
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
  installCommand: 'pkgx github.com/urllib3' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/urllib3' as const,
}

export type Urllib3Package = typeof urllib3Package
