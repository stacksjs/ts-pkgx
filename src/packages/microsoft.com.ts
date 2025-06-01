/**
 * **microsoft.com** - Go home.
 *
 * @domain `microsoft.com`
 *
 * @install `pkgx microsoft.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.microsoftcom
 * console.log(pkg.name)        // "microsoft.com"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/microsoft-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const microsoftcomPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/microsoft.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'microsoft.com' as const,
  fullPath: 'microsoft.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx microsoft.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type MicrosoftcomPackage = typeof microsoftcomPackage
