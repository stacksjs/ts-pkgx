/**
 * **wezterm** - A GPU-accelerated cross-platform terminal emulator and multiplexer written by @wez and implemented in Rust
 *
 * @domain `wezfurlong.org/wezterm`
 * @programs `wezterm`
 * @version `2024.2.3` (1 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/wezfurlong-org/wezterm.md
 *
 * @install `sh <(curl https://pkgx.sh) wezterm`
 * @name `wezterm`
 * @dependencies `zlib.net^1.3`, `linuxfreetype.orgfreedesktop.org/fontconfigopenssl.org^1.1`, `freetype.org`, ... (+2 more)
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
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) wezterm' as const,
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
   */
  dependencies: [
    'zlib.net^1.3',
    'linuxfreetype.orgfreedesktop.org/fontconfigopenssl.org^1.1',
    'freetype.org',
    'freedesktop.org/fontconfig',
    'openssl.org^1.1',
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
  fullPath: 'wezfurlong.org/wezterm' as const,
}

export type WeztermPackage = typeof weztermPackage
