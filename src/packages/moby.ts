/**
 * **moby** - pkgx package
 *
 * @domain `github.com/moby`
 *
 * @install `pkgx github.com/moby`
 * @name `moby`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.moby
 * // Or access via domain
 * const samePkg = pantry.githubcommoby
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "moby"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/moby.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mobyPackage = {
  /**
   * The display name of this package.
   */
  name: 'moby' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/moby' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/moby' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/moby' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/moby' as const,
}

export type MobyPackage = typeof mobyPackage
