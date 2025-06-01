/**
 * **rclone** - Crafters of fine Open Source products
 *
 * @domain `rclone.org`
 *
 * @install `pkgx rclone.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.rcloneorg
 * console.log(pkg.name)        // "rclone"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/rclone-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const rcloneorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'rclone' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/rclone.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'rclone.org' as const,
  fullPath: 'rclone.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx rclone.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type RcloneorgPackage = typeof rcloneorgPackage
