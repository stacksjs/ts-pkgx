/**
 * **volatiletech** - pkgx package
 *
 * @domain `github.com/volatiletech`
 *
 * @install `pkgx github.com/volatiletech`
 * @name `volatiletech`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.volatiletech
 * // Or access via domain
 * const samePkg = pantry.githubcomvolatiletech
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "volatiletech"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/volatiletech.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const volatiletechPackage = {
  /**
   * The display name of this package.
   */
  name: 'volatiletech' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/volatiletech' as const,
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
  installCommand: 'pkgx github.com/volatiletech' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/volatiletech' as const,
}

export type VolatiletechPackage = typeof volatiletechPackage
