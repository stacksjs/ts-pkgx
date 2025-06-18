/**
 * **mtoyoda** - pkgx package
 *
 * @domain `github.com/mtoyoda`
 *
 * @install `pkgx github.com/mtoyoda`
 * @name `mtoyoda`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.mtoyoda
 * // Or access via domain
 * const samePkg = pantry.githubcommtoyoda
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "mtoyoda"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/mtoyoda.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mtoyodaPackage = {
  /**
   * The display name of this package.
   */
  name: 'mtoyoda' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/mtoyoda' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/mtoyoda' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/mtoyoda' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/mtoyoda' as const,
}

export type MtoyodaPackage = typeof mtoyodaPackage
