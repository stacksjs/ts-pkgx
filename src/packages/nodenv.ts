/**
 * **nodenv** - pkgx package
 *
 * @domain `github.com/nodenv`
 *
 * @install `pkgx github.com/nodenv`
 * @name `nodenv`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.nodenv
 * // Or access via domain
 * const samePkg = pantry.githubcomnodenv
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "nodenv"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/nodenv.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const nodenvPackage = {
  /**
   * The display name of this package.
   */
  name: 'nodenv' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/nodenv' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/nodenv' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/nodenv' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/nodenv' as const,
}

export type NodenvPackage = typeof nodenvPackage
