/**
 * **blynn** - pkgx package
 *
 * @domain `github.com/blynn`
 *
 * @install `pkgx github.com/blynn`
 * @name `blynn`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.blynn
 * // Or access via domain
 * const samePkg = pantry.githubcomblynn
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "blynn"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/blynn.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const blynnPackage = {
  /**
   * The display name of this package.
   */
  name: 'blynn' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/blynn' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/blynn' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/blynn' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/blynn' as const,
}

export type BlynnPackage = typeof blynnPackage
