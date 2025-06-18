/**
 * **gotestyourself** - pkgx package
 *
 * @domain `github.com/gotestyourself`
 *
 * @install `pkgx github.com/gotestyourself`
 * @name `gotestyourself`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.gotestyourself
 * // Or access via domain
 * const samePkg = pantry.githubcomgotestyourself
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "gotestyourself"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/gotestyourself.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gotestyourselfPackage = {
  /**
   * The display name of this package.
   */
  name: 'gotestyourself' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/gotestyourself' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/gotestyourself' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/gotestyourself' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/gotestyourself' as const,
}

export type GotestyourselfPackage = typeof gotestyourselfPackage
