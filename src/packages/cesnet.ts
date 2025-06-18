/**
 * **cesnet** - pkgx package
 *
 * @domain `github.com/cesnet`
 *
 * @install `pkgx github.com/cesnet`
 * @name `cesnet`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.cesnet
 * // Or access via domain
 * const samePkg = pantry.githubcomcesnet
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "cesnet"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/cesnet.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cesnetPackage = {
  /**
   * The display name of this package.
   */
  name: 'cesnet' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/cesnet' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/cesnet' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/cesnet' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/cesnet' as const,
}

export type CesnetPackage = typeof cesnetPackage
