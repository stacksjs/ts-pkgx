/**
 * **gx** - pkgx package
 *
 * @domain `tea.xyz/gx`
 *
 * @install `pkgx tea.xyz/gx`
 * @name `gx`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.gx
 * // Or access via domain
 * const samePkg = pantry.teaxyzgx
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "gx"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/tea-xyz/gx.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gxPackage = {
  /**
   * The display name of this package.
   */
  name: 'gx' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'tea.xyz/gx' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from tea.xyz/gx' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx tea.xyz/gx' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'tea.xyz/gx' as const,
}

export type GxPackage = typeof gxPackage
