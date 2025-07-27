/**
 * **spotify_player** - A Spotify player in the terminal with full feature parity
 *
 * @domain `crates.io/spotify_player`
 * @programs `spotify_player`
 * @version `0.20.7` (16 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install spotify_player`
 * @name `spotify_player`
 * @dependencies `openssl.org^1.1`, `github.com/libsixel/libsixel^1`, `linux:alsa-project.org/alsa-lib^1`, ... (+1 more) (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.spotifyplayer
 * // Or access via domain
 * const samePkg = pantry.cratesiospotify_player
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "spotify_player"
 * console.log(pkg.description) // "A Spotify player in the terminal with full feat..."
 * console.log(pkg.programs)    // ["spotify_player"]
 * console.log(pkg.versions[0]) // "0.20.7" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/spotify_player.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const spotifyplayerPackage = {
  /**
   * The display name of this package.
   */
  name: 'spotify_player' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/spotify_player' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A Spotify player in the terminal with full feature parity' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/spotify_player/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install spotify_player' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'spotify_player',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'openssl.org^1.1',
    'github.com/libsixel/libsixel^1',
    'linux:alsa-project.org/alsa-lib^1',
    'linux:freedesktop.org/dbus^1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.20.7',
    '0.20.6',
    '0.20.5',
    '0.20.4',
    '0.20.3',
    '0.20.2',
    '0.20.1',
    '0.20.0',
    '0.19.1',
    '0.18.2',
    '0.18.1',
    '0.18.0',
    '0.17.2',
    '0.17.1',
    '0.17.0',
    '0.0.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) spotify_player -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install spotify_player' as const,
}

export type SpotifyplayerPackage = typeof spotifyplayerPackage
