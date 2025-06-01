/**
 * **snaplet.dev** - Go home.
 *
 * @domain `snaplet.dev`
 *
 * @install `pkgx snaplet.dev`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.snapletdev
 * console.log(pkg.name)        // "snaplet.dev"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/snaplet-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const snapletdevPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/snaplet.dev/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'snaplet.dev' as const,
  fullPath: 'snaplet.dev' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx snaplet.dev' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type SnapletdevPackage = typeof snapletdevPackage
