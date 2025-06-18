/**
 * **xeol-io** - pkgx package
 *
 * @domain `github.com/xeol-io`
 *
 * @install `pkgx github.com/xeol-io`
 * @name `xeol-io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.xeolio
 * // Or access via domain
 * const samePkg = pantry.githubcomxeolio
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "xeol-io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/xeol-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xeolioPackage = {
  /**
   * The display name of this package.
   */
  name: 'xeol-io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/xeol-io' as const,
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
  installCommand: 'pkgx github.com/xeol-io' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/xeol-io' as const,
}

export type XeolioPackage = typeof xeolioPackage
