/**
 * **dotnet.microsoft.com** - Package from pantry: dotnet.microsoft.com
 *
 * @domain `dotnet.microsoft.com`
 *
 * @install `launchpad install dotnet.microsoft.com`
 * @dependencies `linux:unicode.org^71`, `linux:openssl.org` (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.dotnetmicrosoftcom
 * console.log(pkg.name)        // "dotnet.microsoft.com"
 * console.log(pkg.description) // "Package from pantry: dotnet.microsoft.com"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/dotnet-microsoft-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const dotnetmicrosoftcomPackage = {
  /**
   * The display name of this package.
   */
  name: 'dotnet.microsoft.com' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'dotnet.microsoft.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: dotnet.microsoft.com' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install dotnet.microsoft.com' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +dotnet.microsoft.com -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install dotnet.microsoft.com' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'linux:unicode.org^71',
    'linux:openssl.org',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/dotnet.microsoft.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type DotnetmicrosoftcomPackage = typeof dotnetmicrosoftcomPackage
