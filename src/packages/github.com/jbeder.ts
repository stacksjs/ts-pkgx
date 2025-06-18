/**
 * **jbeder** - pkgx package
 *
 * @domain `github.com/jbeder`
 *
 * @install `pkgx github.com/jbeder`
 * @name `jbeder`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.jbeder
 * // Or access via domain
 * const samePkg = pantry.githubcomjbeder
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "jbeder"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/jbeder.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const jbederPackage = {
  /**
   * The display name of this package.
   */
  name: 'jbeder' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/jbeder' as const,
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
  installCommand: 'pkgx github.com/jbeder' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/jbeder' as const,
}

export type JbederPackage = typeof jbederPackage
