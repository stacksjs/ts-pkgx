/**
 * **dotnet** - Crafters of fine Open Source products
 *
 * @domain `dotnet.microsoft.com`
 *
 * @install `pkgx dotnet.microsoft.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.dotnetmicrosoftcom
 * console.log(pkg.name)        // "dotnet"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/dotnet-microsoft-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const dotnetmicrosoftcomPackage = {
  /**
   * The display name of this package.
   */
  name: 'dotnet' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/dotnet.microsoft.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'dotnet.microsoft.com' as const,
  fullPath: 'dotnet.microsoft.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx dotnet.microsoft.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type DotnetmicrosoftcomPackage = typeof dotnetmicrosoftcomPackage
