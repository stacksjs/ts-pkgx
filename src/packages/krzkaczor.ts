/**
 * **krzkaczor** - pkgx package
 *
 * @domain `github.com/krzkaczor`
 *
 * @install `pkgx github.com/krzkaczor`
 * @name `krzkaczor`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.krzkaczor
 * // Or access via domain
 * const samePkg = pantry.githubcomkrzkaczor
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "krzkaczor"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/krzkaczor.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const krzkaczorPackage = {
  /**
   * The display name of this package.
   */
  name: 'krzkaczor' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/krzkaczor' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/krzkaczor' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/krzkaczor' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/krzkaczor' as const,
}

export type KrzkaczorPackage = typeof krzkaczorPackage
