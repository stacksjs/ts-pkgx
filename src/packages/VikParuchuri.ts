/**
 * **VikParuchuri** - pkgx package
 *
 * @domain `github.com/VikParuchuri`
 *
 * @install `pkgx github.com/VikParuchuri`
 * @name `VikParuchuri`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.VikParuchuri
 * // Or access via domain
 * const samePkg = pantry.githubcomvikparuchuri
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "VikParuchuri"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/VikParuchuri.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const vikParuchuriPackage = {
  /**
   * The display name of this package.
   */
  name: 'VikParuchuri' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/VikParuchuri' as const,
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
  installCommand: 'pkgx github.com/VikParuchuri' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/VikParuchuri' as const,
}

export type VikParuchuriPackage = typeof vikParuchuriPackage
