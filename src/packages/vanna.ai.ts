/**
 * **Vanna** - Crafters of fine Open Source products
 *
 * @domain `vanna.ai`
 *
 * @install `pkgx vanna.ai`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.vannaai
 * console.log(pkg.name)        // "Vanna"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/vanna-ai.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const vannaaiPackage = {
  /**
   * The display name of this package.
   */
  name: 'Vanna' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/vanna.ai/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'vanna.ai' as const,
  fullPath: 'vanna.ai' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx vanna.ai' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type VannaaiPackage = typeof vannaaiPackage
