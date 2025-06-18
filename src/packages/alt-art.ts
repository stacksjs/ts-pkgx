/**
 * **alt-art** - pkgx package
 *
 * @domain `github.com/alt-art`
 *
 * @install `pkgx github.com/alt-art`
 * @name `alt-art`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.altart
 * // Or access via domain
 * const samePkg = pantry.githubcomaltart
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "alt-art"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/alt-art.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const altartPackage = {
  /**
   * The display name of this package.
   */
  name: 'alt-art' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/alt-art' as const,
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
  installCommand: 'pkgx github.com/alt-art' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/alt-art' as const,
}

export type AltartPackage = typeof altartPackage
