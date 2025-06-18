/**
 * **mattrobenolt** - pkgx package
 *
 * @domain `github.com/mattrobenolt`
 *
 * @install `pkgx github.com/mattrobenolt`
 * @name `mattrobenolt`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.mattrobenolt
 * // Or access via domain
 * const samePkg = pantry.githubcommattrobenolt
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "mattrobenolt"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/mattrobenolt.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mattrobenoltPackage = {
  /**
   * The display name of this package.
   */
  name: 'mattrobenolt' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/mattrobenolt' as const,
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
  installCommand: 'pkgx github.com/mattrobenolt' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/mattrobenolt' as const,
}

export type MattrobenoltPackage = typeof mattrobenoltPackage
