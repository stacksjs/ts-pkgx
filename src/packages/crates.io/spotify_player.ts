/**
 * **spotify_player** - Package from pantry: crates.io/spotify_player
 *
 * @domain `crates.io/spotify_player`
 *
 * @install `launchpad install crates.io/spotify_player`
 * @dependencies `openssl.org^1.1`, `github.com/libsixel/libsixel^1`, `linux:alsa-project.org/alsa-lib^1`, ... (+1 more) (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesiospotify_player
 * console.log(pkg.name)        // "spotify_player"
 * console.log(pkg.description) // "Package from pantry: crates.io/spotify_player"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/spotify_player.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiospotify_playerPackage = {
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
  description: 'Package from pantry: crates.io/spotify_player' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install crates.io/spotify_player' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/spotify_player -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/spotify_player' as const,
  programs: [] as const,
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
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/spotify_player/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Cratesiospotify_playerPackage = typeof cratesiospotify_playerPackage
