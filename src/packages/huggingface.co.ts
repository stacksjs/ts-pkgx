/**
 * **huggingface/cli** - Crafters of fine Open Source products
 *
 * @domain `huggingface.co`
 *
 * @install `pkgx huggingface.co`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.huggingfaceco
 * console.log(pkg.name)        // "huggingface/cli"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/huggingface-co.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const huggingfacecoPackage = {
  /**
   * The display name of this package.
   */
  name: 'huggingface/cli' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/huggingface.co/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'huggingface.co' as const,
  fullPath: 'huggingface.co' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx huggingface.co' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type HuggingfacecoPackage = typeof huggingfacecoPackage
