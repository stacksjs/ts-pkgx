/**
 * **jaraco** - pkgx package
 *
 * @domain `github.com/jaraco`
 *
 * @install `pkgx github.com/jaraco`
 * @name `jaraco`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.jaraco
 * // Or access via domain
 * const samePkg = pantry.githubcomjaraco
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "jaraco"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/jaraco.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const jaracoPackage = {
  /**
   * The display name of this package.
   */
  name: 'jaraco' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/jaraco' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/jaraco' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/jaraco' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/jaraco' as const,
}

export type JaracoPackage = typeof jaracoPackage
