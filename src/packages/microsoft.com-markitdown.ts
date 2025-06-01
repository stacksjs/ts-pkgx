/**
 * **microsoft.com-markitdown** - Go home.
 *
 * @domain `microsoft.com-markitdown`
 *
 * @install `pkgx microsoft.com-markitdown`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.microsoftcommarkitdown
 * console.log(pkg.name)        // "microsoft.com-markitdown"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/microsoft-com-markitdown.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const microsoftcommarkitdownPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/microsoft.com-markitdown/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'microsoft.com-markitdown' as const,
  fullPath: 'microsoft.com-markitdown' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx microsoft.com-markitdown' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type MicrosoftcommarkitdownPackage = typeof microsoftcommarkitdownPackage
