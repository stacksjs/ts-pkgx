/**
 * **dotnet** - Home of .NET's Virtual Monolithic Repository which includes all the code needed to build the .NET SDK from source
 *
 * @domain `dotnet.microsoft.com`
 * @programs `dotnet`
 * @version `9.0.202` (32 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/dotnet-microsoft-com.md
 * @install `sh <(curl https://pkgx.sh) dotnet`
 * @dependencies `linuxunicode.org^71openssl.org`, `unicode.org^71`, `openssl.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.dotnetmicrosoftcom
 * console.log(pkg.name)        // "dotnet"
 * console.log(pkg.description) // "Home of .NET's Virtual Monolithic Repository wh..."
 * console.log(pkg.programs)    // ["dotnet"]
 * console.log(pkg.versions[0]) // "9.0.202" (latest)
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
   * The canonical domain name for this package.
   */
  domain: 'dotnet.microsoft.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Home of .NET\'s Virtual Monolithic Repository which includes all the code needed to build the .NET SDK from source' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/dotnet.microsoft.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) dotnet' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'dotnet',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'linuxunicode.org^71openssl.org',
    'unicode.org^71',
    'openssl.org',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '9.0.202',
    '9.0.102',
    '9.0.100',
    '8.0.410',
    '8.0.405',
    '8.0.403',
    '8.0.402',
    '8.0.401',
    '8.0.313',
    '8.0.308',
    '8.0.303',
    '8.0.302',
    '8.0.301',
    '8.0.206',
    '8.0.204',
    '8.0.203',
    '8.0.112',
    '8.0.107',
    '8.0.106',
    '8.0.104',
    '8.0.101',
    '8.0.100',
    '7.0.404',
    '7.0.306',
    '7.0.120',
    '6.0.424',
    '6.0.423',
    '6.0.422',
    '6.0.417',
    '6.0.132',
    '6.0.131',
    '6.0.130',
  ] as const,
  fullPath: 'dotnet.microsoft.com' as const,
  aliases: [] as const,
}

export type DotnetmicrosoftcomPackage = typeof dotnetmicrosoftcomPackage
