/**
 * **canonical** - pkgx package
 *
 * @domain `github.com/canonical`
 *
 * @install `pkgx github.com/canonical`
 * @name `canonical`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.canonical
 * // Or access via domain
 * const samePkg = pantry.githubcomcanonical
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "canonical"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/canonical.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const canonicalPackage = {
  /**
   * The display name of this package.
   */
  name: 'canonical' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/canonical' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/canonical' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/canonical' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/canonical' as const,
}

export type CanonicalPackage = typeof canonicalPackage
