/**
 * **microsoft.com-code-cli** - Go home.
 *
 * @domain `microsoft.com-code-cli`
 *
 * @install `pkgx microsoft.com-code-cli`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.microsoftcomcodecli
 * console.log(pkg.name)        // "microsoft.com-code-cli"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/microsoft-com-code-cli.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const microsoftcomcodecliPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/microsoft.com-code-cli/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'microsoft.com-code-cli' as const,
  fullPath: 'microsoft.com-code-cli' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx microsoft.com-code-cli' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type MicrosoftcomcodecliPackage = typeof microsoftcomcodecliPackage
