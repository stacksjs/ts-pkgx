/**
 * **render** - Crafters of fine Open Source products
 *
 * @domain `render.com`
 *
 * @install `pkgx render.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.rendercom
 * console.log(pkg.name)        // "render"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/render-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const rendercomPackage = {
  /**
   * The display name of this package.
   */
  name: 'render' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/render.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'render.com' as const,
  fullPath: 'render.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx render.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type RendercomPackage = typeof rendercomPackage
