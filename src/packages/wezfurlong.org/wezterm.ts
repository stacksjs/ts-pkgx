/**
 * **wezterm** - A GPU-accelerated cross-platform terminal emulator and multiplexer written by @wez and implemented in Rust
 *
 * @domain `wezfurlong.org/wezterm`
 * @programs `wezterm`
 * @version `2024.2.3` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install wezterm`
 * @name `wezterm`
 * @dependencies `zlib.net^1.3`, `linux:freetype.org`, `linux:freedesktop.org/fontconfig`, ... (+1 more) (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.wezterm
 * // Or access via domain
 * const samePkg = pantry.wezfurlongorgwezterm
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "wezterm"
 * console.log(pkg.description) // "A GPU-accelerated cross-platform terminal emula..."
 * console.log(pkg.programs)    // ["wezterm"]
 * console.log(pkg.versions[0]) // "2024.2.3" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/wezfurlong-org/wezterm.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const weztermPackage = {
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
  description: 'A GPU-accelerated cross-platform terminal emulator and multiplexer written by @wez and implemented in Rust' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/wezfurlong.org/wezterm/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install wezterm' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'wezterm',
  ] as const,
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
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2024.2.3',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type WeztermPackage = typeof weztermPackage
