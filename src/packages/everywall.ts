/**
 * **everywall** - pkgx package
 *
 * @domain `github.com/everywall`
 *
 * @install `pkgx github.com/everywall`
 * @name `everywall`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.everywall
 * // Or access via domain
 * const samePkg = pantry.githubcomeverywall
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "everywall"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/everywall.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const everywallPackage = {
  /**
   * The display name of this package.
   */
  name: 'everywall' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/everywall' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/everywall' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/everywall' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/everywall' as const,
}

export type EverywallPackage = typeof everywallPackage
