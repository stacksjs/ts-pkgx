/**
 * **kevinburke** - pkgx package
 *
 * @domain `github.com/kevinburke`
 *
 * @install `pkgx github.com/kevinburke`
 * @name `kevinburke`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.kevinburke
 * // Or access via domain
 * const samePkg = pantry.githubcomkevinburke
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "kevinburke"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/kevinburke.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const kevinburkePackage = {
  /**
   * The display name of this package.
   */
  name: 'kevinburke' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/kevinburke' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/kevinburke' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/kevinburke' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/kevinburke' as const,
}

export type KevinburkePackage = typeof kevinburkePackage
