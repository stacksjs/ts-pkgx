/**
 * **thoughtbot** - pkgx package
 *
 * @domain `github.com/thoughtbot`
 *
 * @install `pkgx github.com/thoughtbot`
 * @name `thoughtbot`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.thoughtbot
 * // Or access via domain
 * const samePkg = pantry.githubcomthoughtbot
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "thoughtbot"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/thoughtbot.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const thoughtbotPackage = {
  /**
   * The display name of this package.
   */
  name: 'thoughtbot' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/thoughtbot' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/thoughtbot' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/thoughtbot' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/thoughtbot' as const,
}

export type ThoughtbotPackage = typeof thoughtbotPackage
