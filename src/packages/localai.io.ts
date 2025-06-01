/**
 * **LocalAI** - Crafters of fine Open Source products
 *
 * @domain `localai.io`
 *
 * @install `pkgx localai.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.localaiio
 * console.log(pkg.name)        // "LocalAI"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/localai-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const localaiioPackage = {
  /**
   * The display name of this package.
   */
  name: 'LocalAI' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/localai.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'localai.io' as const,
  fullPath: 'localai.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx localai.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type LocalaiioPackage = typeof localaiioPackage
