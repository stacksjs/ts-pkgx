/**
 * **brewkit** - pkgx package
 *
 * @domain `tea.xyz/brewkit`
 *
 * @install `pkgx tea.xyz/brewkit`
 * @name `brewkit`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.brewkit
 * // Or access via domain
 * const samePkg = pantry.teaxyzbrewkit
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "brewkit"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/tea-xyz/brewkit.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const brewkitPackage = {
  /**
   * The display name of this package.
   */
  name: 'brewkit' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'tea.xyz/brewkit' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from tea.xyz/brewkit' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx tea.xyz/brewkit' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'tea.xyz/brewkit' as const,
}

export type BrewkitPackage = typeof brewkitPackage
