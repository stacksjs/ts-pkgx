/**
 * **gabime** - pkgx package
 *
 * @domain `github.com/gabime`
 *
 * @install `pkgx github.com/gabime`
 * @name `gabime`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.gabime
 * // Or access via domain
 * const samePkg = pantry.githubcomgabime
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "gabime"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/gabime.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gabimePackage = {
  /**
   * The display name of this package.
   */
  name: 'gabime' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/gabime' as const,
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
  installCommand: 'pkgx github.com/gabime' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/gabime' as const,
}

export type GabimePackage = typeof gabimePackage
