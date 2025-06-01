/**
 * **wasmer** - Crafters of fine Open Source products
 *
 * @domain `wasmer.io`
 *
 * @install `pkgx wasmer.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.wasmerio
 * console.log(pkg.name)        // "wasmer"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/wasmer-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const wasmerioPackage = {
  /**
   * The display name of this package.
   */
  name: 'wasmer' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/wasmer.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'wasmer.io' as const,
  fullPath: 'wasmer.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx wasmer.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type WasmerioPackage = typeof wasmerioPackage
