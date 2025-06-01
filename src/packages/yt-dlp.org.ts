/**
 * **yt-dlp** - Crafters of fine Open Source products
 *
 * @domain `yt-dlp.org`
 *
 * @install `pkgx yt-dlp.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.ytdlporg
 * console.log(pkg.name)        // "yt-dlp"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/yt-dlp-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ytdlporgPackage = {
  /**
   * The display name of this package.
   */
  name: 'yt-dlp' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/yt-dlp.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'yt-dlp.org' as const,
  fullPath: 'yt-dlp.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx yt-dlp.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type YtdlporgPackage = typeof ytdlporgPackage
