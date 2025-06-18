/**
 * **context-labs** - pkgx package
 *
 * @domain `github.com/context-labs`
 *
 * @install `pkgx github.com/context-labs`
 * @name `context-labs`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.contextlabs
 * // Or access via domain
 * const samePkg = pantry.githubcomcontextlabs
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "context-labs"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/context-labs.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const contextlabsPackage = {
  /**
   * The display name of this package.
   */
  name: 'context-labs' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/context-labs' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/context-labs' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/context-labs' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/context-labs' as const,
}

export type ContextlabsPackage = typeof contextlabsPackage
