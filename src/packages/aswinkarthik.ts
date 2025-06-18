/**
 * **aswinkarthik** - pkgx package
 *
 * @domain `github.com/aswinkarthik`
 *
 * @install `pkgx github.com/aswinkarthik`
 * @name `aswinkarthik`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.aswinkarthik
 * // Or access via domain
 * const samePkg = pantry.githubcomaswinkarthik
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "aswinkarthik"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/aswinkarthik.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const aswinkarthikPackage = {
  /**
   * The display name of this package.
   */
  name: 'aswinkarthik' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/aswinkarthik' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/aswinkarthik' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/aswinkarthik' as const,
}

export type AswinkarthikPackage = typeof aswinkarthikPackage
