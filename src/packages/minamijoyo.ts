/**
 * **minamijoyo** - pkgx package
 *
 * @domain `github.com/minamijoyo`
 *
 * @install `pkgx github.com/minamijoyo`
 * @name `minamijoyo`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.minamijoyo
 * // Or access via domain
 * const samePkg = pantry.githubcomminamijoyo
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "minamijoyo"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/minamijoyo.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const minamijoyoPackage = {
  /**
   * The display name of this package.
   */
  name: 'minamijoyo' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/minamijoyo' as const,
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
  installCommand: 'pkgx github.com/minamijoyo' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/minamijoyo' as const,
}

export type MinamijoyoPackage = typeof minamijoyoPackage
