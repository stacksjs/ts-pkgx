/**
 * **jarun** - pkgx package
 *
 * @domain `github.com/jarun`
 *
 * @install `pkgx github.com/jarun`
 * @name `jarun`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.jarun
 * // Or access via domain
 * const samePkg = pantry.githubcomjarun
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "jarun"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/jarun.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const jarunPackage = {
  /**
   * The display name of this package.
   */
  name: 'jarun' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/jarun' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/jarun' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/jarun' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/jarun' as const,
}

export type JarunPackage = typeof jarunPackage
