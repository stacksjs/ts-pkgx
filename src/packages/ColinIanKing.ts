/**
 * **ColinIanKing** - pkgx package
 *
 * @domain `github.com/ColinIanKing`
 *
 * @install `pkgx github.com/ColinIanKing`
 * @name `ColinIanKing`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.ColinIanKing
 * // Or access via domain
 * const samePkg = pantry.githubcomcolinianking
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "ColinIanKing"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/ColinIanKing.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const colinIanKingPackage = {
  /**
   * The display name of this package.
   */
  name: 'ColinIanKing' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/ColinIanKing' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/ColinIanKing' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/ColinIanKing' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/ColinIanKing' as const,
}

export type ColinIanKingPackage = typeof colinIanKingPackage
