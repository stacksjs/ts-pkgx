/**
 * **keep** - Crafters of fine Open Source products
 *
 * @domain `keephq.dev`
 *
 * @install `pkgx keephq.dev`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.keephqdev
 * console.log(pkg.name)        // "keep"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/keephq-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const keephqdevPackage = {
  /**
   * The display name of this package.
   */
  name: 'keep' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/keephq.dev/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'keephq.dev' as const,
  fullPath: 'keephq.dev' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx keephq.dev' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type KeephqdevPackage = typeof keephqdevPackage
