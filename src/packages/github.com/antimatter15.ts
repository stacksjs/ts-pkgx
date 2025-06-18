/**
 * **antimatter15** - pkgx package
 *
 * @domain `github.com/antimatter15`
 *
 * @install `pkgx github.com/antimatter15`
 * @name `antimatter15`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.antimatter15
 * // Or access via domain
 * const samePkg = pantry.githubcomantimatter15
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "antimatter15"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/antimatter15.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const antimatter15Package = {
  /**
   * The display name of this package.
   */
  name: 'antimatter15' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/antimatter15' as const,
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
  installCommand: 'pkgx github.com/antimatter15' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/antimatter15' as const,
}

export type Antimatter15Package = typeof antimatter15Package
