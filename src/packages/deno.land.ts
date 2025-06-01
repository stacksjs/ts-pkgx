/**
 * **deno** - Crafters of fine Open Source products
 *
 * @domain `deno.land`
 *
 * @install `pkgx deno.land`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.denoland
 * console.log(pkg.name)        // "deno"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/deno-land.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const denolandPackage = {
  /**
   * The display name of this package.
   */
  name: 'deno' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/deno.land/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'deno.land' as const,
  fullPath: 'deno.land' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx deno.land' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type DenolandPackage = typeof denolandPackage
