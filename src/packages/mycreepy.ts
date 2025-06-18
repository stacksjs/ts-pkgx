/**
 * **mycreepy** - pkgx package
 *
 * @domain `github.com/mycreepy`
 *
 * @install `pkgx github.com/mycreepy`
 * @name `mycreepy`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.mycreepy
 * // Or access via domain
 * const samePkg = pantry.githubcommycreepy
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "mycreepy"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/mycreepy.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mycreepyPackage = {
  /**
   * The display name of this package.
   */
  name: 'mycreepy' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/mycreepy' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/mycreepy' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/mycreepy' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/mycreepy' as const,
}

export type MycreepyPackage = typeof mycreepyPackage
