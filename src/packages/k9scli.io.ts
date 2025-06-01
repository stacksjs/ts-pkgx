/**
 * **k9s** - Crafters of fine Open Source products
 *
 * @domain `k9scli.io`
 *
 * @install `pkgx k9scli.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.k9scliio
 * console.log(pkg.name)        // "k9s"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/k9scli-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const k9scliioPackage = {
  /**
   * The display name of this package.
   */
  name: 'k9s' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/k9scli.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'k9scli.io' as const,
  fullPath: 'k9scli.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx k9scli.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type K9scliioPackage = typeof k9scliioPackage
