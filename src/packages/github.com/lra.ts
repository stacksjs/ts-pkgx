/**
 * **lra** - pkgx package
 *
 * @domain `github.com/lra`
 *
 * @install `pkgx github.com/lra`
 * @name `lra`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.lra
 * // Or access via domain
 * const samePkg = pantry.githubcomlra
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "lra"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/lra.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const lraPackage = {
  /**
   * The display name of this package.
   */
  name: 'lra' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/lra' as const,
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
  installCommand: 'pkgx github.com/lra' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/lra' as const,
}

export type LraPackage = typeof lraPackage
