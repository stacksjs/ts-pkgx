/**
 * **tea.xyz** - Go home.
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
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/tea-xyz.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const teaxyzPackage = {
  /**
   * The display name of this package.
   */
  name: '' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Go home.' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/tea.xyz/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'tea.xyz' as const,
  fullPath: 'tea.xyz' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx tea.xyz' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type TeaxyzPackage = typeof teaxyzPackage
