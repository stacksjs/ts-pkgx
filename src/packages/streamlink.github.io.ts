/**
 * **streamlink** - Crafters of fine Open Source products
 *
 * @domain `streamlink.github.io`
 *
 * @install `pkgx streamlink.github.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.streamlinkgithubio
 * console.log(pkg.name)        // "streamlink"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/streamlink-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const streamlinkgithubioPackage = {
  /**
   * The display name of this package.
   */
  name: 'streamlink' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/streamlink.github.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'streamlink.github.io' as const,
  fullPath: 'streamlink.github.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx streamlink.github.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type StreamlinkgithubioPackage = typeof streamlinkgithubioPackage
