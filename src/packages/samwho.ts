/**
 * **samwho** - pkgx package
 *
 * @domain `github.com/samwho`
 *
 * @install `pkgx github.com/samwho`
 * @name `samwho`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.samwho
 * // Or access via domain
 * const samePkg = pantry.githubcomsamwho
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "samwho"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/samwho.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const samwhoPackage = {
  /**
   * The display name of this package.
   */
  name: 'samwho' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/samwho' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/samwho' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/samwho' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/samwho' as const,
}

export type SamwhoPackage = typeof samwhoPackage
