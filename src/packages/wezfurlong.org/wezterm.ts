/**
 * **wezterm** - Package from pantry: wezfurlong.org/wezterm
 *
 * @domain `wezfurlong.org/wezterm`
 *
 * @install `launchpad install wezfurlong.org/wezterm`
 * @dependencies `zlib.net^1.3`, `linux:freetype.org`, `linux:freedesktop.org/fontconfig`, ... (+1 more) (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.wezfurlongorgwezterm
 * console.log(pkg.name)        // "wezterm"
 * console.log(pkg.description) // "Package from pantry: wezfurlong.org/wezterm"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/wezfurlong-org/wezterm.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const wezfurlongorgweztermPackage = {
  /**
   * The display name of this package.
   */
  name: 'wezterm' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'wezfurlong.org/wezterm' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: wezfurlong.org/wezterm' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install wezfurlong.org/wezterm' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +wezfurlong.org/wezterm -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install wezfurlong.org/wezterm' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'zlib.net^1.3',
    'linux:freetype.org',
    'linux:freedesktop.org/fontconfig',
    'linux:openssl.org^1.1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/wezfurlong.org/wezterm/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type WezfurlongorgweztermPackage = typeof wezfurlongorgweztermPackage
