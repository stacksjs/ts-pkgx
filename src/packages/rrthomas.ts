/**
 * **rrthomas** - pkgx package
 *
 * @domain `github.com/rrthomas`
 *
 * @install `pkgx github.com/rrthomas`
 * @name `rrthomas`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.rrthomas
 * // Or access via domain
 * const samePkg = pantry.githubcomrrthomas
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "rrthomas"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/rrthomas.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const rrthomasPackage = {
  /**
   * The display name of this package.
   */
  name: 'rrthomas' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/rrthomas' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/rrthomas' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/rrthomas' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/rrthomas' as const,
}

export type RrthomasPackage = typeof rrthomasPackage
