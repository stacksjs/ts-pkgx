/**
 * **edenhill** - pkgx package
 *
 * @domain `github.com/edenhill`
 *
 * @install `pkgx github.com/edenhill`
 * @name `edenhill`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.edenhill
 * // Or access via domain
 * const samePkg = pantry.githubcomedenhill
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "edenhill"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/edenhill.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const edenhillPackage = {
  /**
   * The display name of this package.
   */
  name: 'edenhill' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/edenhill' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/edenhill' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/edenhill' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/edenhill' as const,
}

export type EdenhillPackage = typeof edenhillPackage
