/**
 * **teller** - Crafters of fine Open Source products
 *
 * @domain `tlr.dev`
 *
 * @install `pkgx tlr.dev`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.tlrdev
 * console.log(pkg.name)        // "teller"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/tlr-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const tlrdevPackage = {
  /**
   * The display name of this package.
   */
  name: 'teller' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/tlr.dev/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'tlr.dev' as const,
  fullPath: 'tlr.dev' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx tlr.dev' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type TlrdevPackage = typeof tlrdevPackage
