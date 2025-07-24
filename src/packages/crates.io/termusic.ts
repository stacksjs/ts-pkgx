/**
 * **termusic** - pkgx package
 *
 * @domain `crates.io/termusic`
 *
 * @install `launchpad install crates.io/termusic`
 * @dependencies `linux:alsa-project.org/alsa-lib`, `linux:freedesktop.org/dbus` (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesiotermusic
 * console.log(pkg.name)        // "termusic"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/termusic.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiotermusicPackage = {
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
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install crates.io/termusic' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'linux:alsa-project.org/alsa-lib',
    'linux:freedesktop.org/dbus',
  ] as const,
  versions: [] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/termusic -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/termusic' as const,
}

export type CratesiotermusicPackage = typeof cratesiotermusicPackage
