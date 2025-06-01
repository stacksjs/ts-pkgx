/**
 * **ffmpeg.org** - Crafters of fine Open Source products
 *
 * @domain `ffmpeg.org`
 *
 * @install `pkgx ffmpeg.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.ffmpegorg
 * console.log(pkg.name)        // "ffmpeg.org"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/ffmpeg-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ffmpegorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'ffmpeg.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/ffmpeg.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'ffmpeg.org' as const,
  fullPath: 'ffmpeg.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx ffmpeg.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type FfmpegorgPackage = typeof ffmpegorgPackage
