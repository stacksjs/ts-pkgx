/**
 * **gstreamer.freedesktop.org** - Go home.
 *
 * @domain `gstreamer.freedesktop.org`
 *
 * @install `pkgx gstreamer.freedesktop.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gstreamerfreedesktoporg
 * console.log(pkg.name)        // "gstreamer.freedesktop.org"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gstreamer-freedesktop-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gstreamerfreedesktoporgPackage = {
  /**
   * The display name of this package.
   */
  name: '' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Go home.' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/gstreamer.freedesktop.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gstreamer.freedesktop.org' as const,
  fullPath: 'gstreamer.freedesktop.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx gstreamer.freedesktop.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type GstreamerfreedesktoporgPackage = typeof gstreamerfreedesktoporgPackage
