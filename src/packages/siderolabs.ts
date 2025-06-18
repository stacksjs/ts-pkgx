/**
 * **siderolabs** - pkgx package
 *
 * @domain `github.com/siderolabs`
 *
 * @install `pkgx github.com/siderolabs`
 * @name `siderolabs`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.siderolabs
 * // Or access via domain
 * const samePkg = pantry.githubcomsiderolabs
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "siderolabs"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/siderolabs.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const siderolabsPackage = {
  /**
   * The display name of this package.
   */
  name: 'siderolabs' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/siderolabs' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/siderolabs' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/siderolabs' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/siderolabs' as const,
}

export type SiderolabsPackage = typeof siderolabsPackage
