/**
 * **sekrit-twc** - pkgx package
 *
 * @domain `github.com/sekrit-twc`
 *
 * @install `pkgx github.com/sekrit-twc`
 * @name `sekrit-twc`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.sekrittwc
 * // Or access via domain
 * const samePkg = pantry.githubcomsekrittwc
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "sekrit-twc"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/sekrit-twc.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const sekrittwcPackage = {
  /**
   * The display name of this package.
   */
  name: 'sekrit-twc' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/sekrit-twc' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/sekrit-twc' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/sekrit-twc' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/sekrit-twc' as const,
}

export type SekrittwcPackage = typeof sekrittwcPackage
