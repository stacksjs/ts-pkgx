/**
 * **koekeishiya** - pkgx package
 *
 * @domain `github.com/koekeishiya`
 *
 * @install `pkgx github.com/koekeishiya`
 * @name `koekeishiya`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.koekeishiya
 * // Or access via domain
 * const samePkg = pantry.githubcomkoekeishiya
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "koekeishiya"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/koekeishiya.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const koekeishiyaPackage = {
  /**
   * The display name of this package.
   */
  name: 'koekeishiya' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/koekeishiya' as const,
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
  installCommand: 'pkgx github.com/koekeishiya' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/koekeishiya' as const,
}

export type KoekeishiyaPackage = typeof koekeishiyaPackage
