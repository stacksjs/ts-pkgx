/**
 * **termusic** - Music Player TUI written in Rust
 *
 * @domain `crates.io/termusic`
 * @programs `termusic`, `termusic-server`
 * @version `0.10.0` (3 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/crates-io/termusic.md
 *
 * @install `sh <(curl https://pkgx.sh) +crates.io/termusic -- $SHELL -i`
 * @name `termusic`
 * @dependencies `linuxalsa-project.org/alsa-libfreedesktop.org/dbus`, `alsa-project.org/alsa-lib`, `freedesktop.org/dbus`
 * @companions `yt-dlp.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.termusic
 * // Or access via domain
 * const samePkg = pantry.cratesiotermusic
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "termusic"
 * console.log(pkg.description) // "Music Player TUI written in Rust"
 * console.log(pkg.programs)    // ["termusic", "termusic-server"]
 * console.log(pkg.versions[0]) // "0.10.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/termusic.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const termusicPackage = {
  /**
   * The display name of this package.
   */
  name: 'termusic' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/termusic' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Music Player TUI written in Rust' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/termusic/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +crates.io/termusic -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'termusic',
    'termusic-server',
  ] as const,
  /**
   * Related packages that work well with this package.
   * Consider installing these for enhanced functionality.
   */
  companions: [
    'yt-dlp.org',
  ] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'linuxalsa-project.org/alsa-libfreedesktop.org/dbus',
    'alsa-project.org/alsa-lib',
    'freedesktop.org/dbus',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.10.0',
    '0.9.1',
    '0.9.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'crates.io/termusic' as const,
}

export type TermusicPackage = typeof termusicPackage
