/**
 * **ni** - pkgx package
 *
 * @domain `github.com/antfu/ni`
 *
 * @install `pkgx github.com/antfu/ni`
 * @name `ni`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.ni
 * // Or access via domain
 * const samePkg = pantry.githubcomantfuni
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "ni"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/antfu-ni.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const niPackage = {
  /**
   * The display name of this package.
   */
  name: 'ni' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/antfu/ni' as const,
  /**
   * Brief description of what this package does.
   */
  description: '💡 Use the right package manager' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/antfu/ni' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: ['ni'] as const,
  fullPath: 'github.com/antfu/ni' as const,
}

export type NiPackage = typeof niPackage
