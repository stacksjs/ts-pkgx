/**
 * **alacritty.org** - pkgx package
 *
 * @domain `alacritty.org`
 *
 * @install `launchpad install alacritty.org`
 * @dependencies `linux:freetype.org`, `linux:freedesktop.org/fontconfig` (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.alacrittyorg
 * console.log(pkg.name)        // "alacritty.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/alacritty-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const alacrittyorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'alacritty.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'alacritty.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install alacritty.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'linux:freetype.org',
    'linux:freedesktop.org/fontconfig',
  ] as const,
  versions: [] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +alacritty.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install alacritty.org' as const,
}

export type AlacrittyorgPackage = typeof alacrittyorgPackage
