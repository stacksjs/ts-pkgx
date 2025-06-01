/**
 * **hx** - Crafters of fine Open Source products
 *
 * @domain `helix-editor.com`
 *
 * @install `pkgx helix-editor.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.helixeditorcom
 * console.log(pkg.name)        // "hx"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/helix-editor-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const helixeditorcomPackage = {
  /**
   * The display name of this package.
   */
  name: 'hx' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/helix-editor.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'helix-editor.com' as const,
  fullPath: 'helix-editor.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx helix-editor.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type HelixeditorcomPackage = typeof helixeditorcomPackage
