/**
 * **youtube-dl** - Crafters of fine Open Source products
 *
 * @domain `youtube-dl.org`
 *
 * @install `pkgx youtube-dl.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.youtubedlorg
 * console.log(pkg.name)        // "youtube-dl"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/youtube-dl-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const youtubedlorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'youtube-dl' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/youtube-dl.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'youtube-dl.org' as const,
  fullPath: 'youtube-dl.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx youtube-dl.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type YoutubedlorgPackage = typeof youtubedlorgPackage
