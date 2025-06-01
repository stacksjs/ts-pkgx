/**
 * **vite** - Crafters of fine Open Source products
 *
 * @domain `vitejs.dev`
 *
 * @install `pkgx vitejs.dev`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.vitejsdev
 * console.log(pkg.name)        // "vite"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/vitejs-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const vitejsdevPackage = {
  /**
   * The display name of this package.
   */
  name: 'vite' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/vitejs.dev/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'vitejs.dev' as const,
  fullPath: 'vitejs.dev' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx vitejs.dev' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type VitejsdevPackage = typeof vitejsdevPackage
