/**
 * **tea.xyz** - pkgx package
 *
 * @domain `tea.xyz`
 *
 * @install `pkgx tea.xyz`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.teaxyz
 * console.log(pkg.name)        // "tea.xyz"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/tea-xyz.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const teaxyzPackage = {
  /**
   * The display name of this package.
   */
  name: 'tea.xyz' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'tea.xyz' as const,
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
  installCommand: 'pkgx tea.xyz' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  aliases: [] as const,
  fullPath: 'tea.xyz' as const,
}

export type TeaxyzPackage = typeof teaxyzPackage
